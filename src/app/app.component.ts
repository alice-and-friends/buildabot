import { Component } from '@angular/core';
import { LEVELS } from 'app/constants/levels';
import { Environment } from 'app/models/environment';
import { Level } from './models/level';

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
  program: object;

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
    this.environment = new Environment(this.level);

    // Prepare an empty program
    this.program = {
      instructions: [],
    };

    // Ready for player input
    this.state = State.ready;
  }

  runProgram() {
    this.state = State.running;
    this.environment.runProgram(this.program);
    this.state = State.finished;
  }
}
