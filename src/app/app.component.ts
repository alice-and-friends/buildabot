import { Component } from '@angular/core';
import { Gameboard } from 'app/models/gameboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Buildabot';
  gameboard = new Gameboard({
    boardSize: 2,
  });
  program = {
    name: 'HelloWorld',
    commands: [],
  };

  runProgram() {
    this.gameboard.runProgram(this.program);
  }
}
