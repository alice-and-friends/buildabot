import { Component } from '@angular/core';
import { Environment } from 'app/models/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Buildabot';
  environment = new Environment({
    boardSize: 2,
  });
  program = {
    name: 'HelloWorld',
    instructions: [],
  };

  runProgram() {
    this.environment.runProgram(this.program);
  }
}
