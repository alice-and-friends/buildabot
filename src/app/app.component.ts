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
  public Result = Result;
  state: State;
  result: Result;
  level: Level;
  selectedLevel: Level;
  environment: Environment;
  instructionSet: Instruction[];
  program: Program;

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
    this.environment = new Environment(Utils.copy(this.level));

    // Prepare an empty program
    this.program = new Program();

    // Prepare instruction set
    this.instructionSet = this.level.instructionSet.length ? this.level.instructionSet : INSTRUCTIONS;

    // Ready for player input
    this.state = State.ready;
  }

  runProgram() {
    this.state = State.running;

    const p = this.program.copy(); // Grab a copy of the program to run

    p.run(() => { // For each tick:

      // End the program if there are no instructions
      if (p.instructions.length === 0) {
        p.stop();
        return;
      }

      // Get the next instruction and execute it
      const instruction = p.instructions.shift();
      this.environment.player[instruction.f]();

      // Check if win condition is met
      if (this.environment.player.position.matches(this.level.winPos)) {
        this.result = Result.success;
        p.stop();
      }
    }, 800);


    this.state = State.finished;
  }

  resetEnvironment() {
    this.environment.reset(Utils.copy(this.level));
  }
}
