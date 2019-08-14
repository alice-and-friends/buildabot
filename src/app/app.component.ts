import { Component } from '@angular/core';
import { LEVELS } from 'app/constants/levels';
import { INSTRUCTIONS } from 'app/constants/instructions';
import { Environment } from 'app/models/environment';
import { Instruction } from 'app/models/instruction';
import { Level } from './models/level';
import { Mine } from './models/object';
import Utils from './utils';

export enum State {
  init, loading, ready, running, finished
}
export enum Result {
  undetermined, success, failure
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /*
   * Some important distinctions between variables:
   * `selectedLevel` is a recipe, it describes what the level should look like. we should never edit this object directly.
   * `activeLevel` is the current level state, it starts out as a copy of `level`, and will be updated continuously while the program runs
   * `nextLevel` is the recipe for the next level, if one exists. This is preloaded because it affects progression options in the UI.
   */
  public LEVELS = LEVELS;
  public State = State;
  public Result = Result;
  state: State;
  result: Result;
  selectedLevel: Level;
  activeLevel: Level;
  nextLevel: Level;
  environment: Environment;
  instructionSet: Instruction[];

  private interactions = [
    {
      subject: 'Robot',
      object: 'Mine',
      f: (subject, object) => {
        object.activated = true;
        subject.die();
        this.state = State.finished;
        this.result = Result.failure;
      }
    }
  ];

  constructor() {
    // Set initial state
    this.state = State.init;
    this.result = Result.undetermined;

    // Load the first level
    const levelOne = LEVELS.find((level) => {
      return level.id === 1;
    });
    this.selectedLevel = levelOne; // Set the default value of level selector dropdown
    this.loadLevel(this.selectedLevel);
  }

  loadLevel(level) {
    this.state = State.loading;

    // Load level data
    this.activeLevel = new Level(level);

    // Reset previous results
    this.result = Result.undetermined;

    // Configure environment for the selected level
    this.environment = new Environment(this.activeLevel);

    // Prepare instruction set
    this.instructionSet = this.activeLevel.instructionSet.length ? this.activeLevel.instructionSet.map(Instruction.getById) : INSTRUCTIONS;

    // Ready to accept programming
    this.state = State.ready;

    // Set the level selector dropdown to reflect the current level
    this.selectedLevel = level;

    // Preload the next level
    this.nextLevel = LEVELS.find((l) => {
      return l.id === this.activeLevel.id + 1;
    });
  }

  async runProgram() {
    this.state = State.running;
    console.log('begin run program', Utils.copy(this.environment.player.program));

    const delay = ms => new Promise(res => setTimeout(res, ms));
    let playerInstruction;
    let enemyInstruction;
    let round = 0;
    while (true) {
      console.log('begin instruction round', round);

      // Player moves first
      playerInstruction = this.environment.player.program.instructions[round];
      if (!playerInstruction) {
        console.log('program ended (no more instructions)');
        this.result = Result.failure;
        this.state = State.finished;
        break; // No more instructions, end program
      }
      console.log('player does', playerInstruction);
      this.environment.player[playerInstruction.f]();
      await delay(500);

      // Check for object interactions at the new position
      const objectOnTile = this.environment.objects.find(o => o.position.matches(this.environment.player.position));
      if (objectOnTile) {
        const playerObjectInteraction = this.interactions.find((i) => {
          return i.subject === 'Robot' && i.object === objectOnTile.constructor.name;
        });
        if (playerObjectInteraction) {
          playerObjectInteraction.f(this.environment.player, objectOnTile); // Run interaction
          if (this.state.valueOf() === State.finished.valueOf()) {
            break; // End program
          }
        }
      }

      // Check win condition
      // TODO: Can probably remove this block when battery has been refactor as interactable object (win interaction)
      if (this.environment.player.position.matches(this.activeLevel.winPos)) {
        console.log('program ended (player won)');
        this.result = Result.success;
        this.state = State.finished;
        break; // End program
      }

      // Enemies move
      for (const enemy of this.environment.enemies) {
        enemyInstruction = enemy.program.instructions[round];
        if (enemyInstruction) {
          console.log('enemy does', enemyInstruction);
          enemy[enemyInstruction.f]();
          await delay(500);
        }
      }

      // Increase counter for next round
      round++;
    }
  }

  restartLevel() {
    this.loadLevel(this.selectedLevel);
  }
}
