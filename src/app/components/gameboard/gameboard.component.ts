import {Component, Input} from '@angular/core';
import { Gameboard } from 'app/models/gameboard';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
})
export class GameboardComponent {
  @Input() gameboard: Gameboard;

  constructor() {
  }
}
