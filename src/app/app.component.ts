import { Component } from '@angular/core';
import { LEVELS } from 'app/constants/levels';
import { Environment } from 'app/models/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  environment: Environment;
  program: object;

  constructor() {
    const level = LEVELS[0];
    this.environment = new Environment({
      boardSize: level.boardSize,
      startPos: level.startPos,
    });
    this.program = {
      name: 'HelloWorld',
      instructions: [],
    };
  }
  runProgram() {
    this.environment.runProgram(this.program);
  }
}
