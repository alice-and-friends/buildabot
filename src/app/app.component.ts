import { Component } from '@angular/core';
import { COMMANDS } from './constants/commands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Buildabot';
  commands = COMMANDS;
}
