import { Component } from '@angular/core';
import { LEVELS } from 'app/constants/levels';
import { Environment } from 'app/models/environment';
import { Level } from './models/level';
import { Program } from './models/program';
import Utils from './utils';

export enum State {
  init, loading, ready, running, finished
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state: State;
  level: Level;
  environment: Environment;
  program: Program;

  constructor() {
    // Set initial state
    this.state = State.init;

    // Load the first level
    this.loadLevel(1);
  }

  loadLevel(id) {
    this.state = State.loading;

    // Load the desired level
    this.level = LEVELS.find((level) => {
      return level.id === id;
    });

    // Prepare the environment
    this.environment = new Environment(Utils.copy(this.level));

    // Prepare an empty program
    this.program = new Program();

    // Ready for player input
    this.state = State.ready;
  }

  runProgram() {
    this.state = State.running;

    const program = Utils.copy(this.program);
    console.log('Executing instruction sequence:', program.instructions);
    const myInterval = setInterval(() => {
      if (program.instructions.length) {
        const c = program.instructions.shift();
        this.environment.player[c.f]();
      }
      else {
        clearInterval(myInterval);
      }
    }, 600);

    this.state = State.finished;
  }

  resetEnvironment() {
    this.environment.reset(Utils.copy(this.level));
  }
}
