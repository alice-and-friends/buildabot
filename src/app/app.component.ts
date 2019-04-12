import { Component } from '@angular/core';
import { LEVELS } from 'app/constants/levels';
import { INSTRUCTIONS } from 'app/constants/instructions';
import { Environment } from 'app/models/environment';
import { Instruction } from 'app/models/instruction';
import { Level } from './models/level';
import { Program } from './models/program';
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
  public LEVELS = LEVELS;
  public State = State;
  public Result = Result;
  state: State;
  result: Result;
  level: Level;
  nextLevel: Level;
  selectedLevel: Level;
  environment: Environment;
  instructionSet: Instruction[];

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

    // Load the desired level
    this.level = level;

    // Reset previous results
    this.result = Result.undetermined;

    // Prepare the environment
    this.environment = new Environment(this.level);

    // Prepare instruction set
    this.instructionSet = this.level.instructionSet.length ? this.level.instructionSet.map(Instruction.getById) : INSTRUCTIONS;

    // Set the level selector dropdown to reflect the current level
    this.selectedLevel = this.level;

    // Prepare the next level
    this.nextLevel = LEVELS.find((l) => {
      return l.id === this.level.id + 1;
    });

    // Ready for robot input
    this.state = State.ready;
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
        break; // No more instructions, end the loop
      }
      console.log('player does', playerInstruction);
      this.environment.player[playerInstruction.f]();
      await delay(500);

      // Check win condition
      if (this.environment.player.position.matches(this.level.winPos)) {
        console.log('program ended (player won)');
        this.result = Result.success;
        this.state = State.finished;
        break; // End the loop
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

  resetLevel() {
    this.environment.reset(Utils.copy(this.level));
    this.state = State.ready;
    this.result = Result.undetermined;
  }
}
