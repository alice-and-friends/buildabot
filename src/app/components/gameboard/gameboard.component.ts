import { Component } from '@angular/core';
import { Player } from 'app/models/player';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  boardSize = 2;
  tiles = [];
  player = new Player({
    posX: 0,
    posY: 1,
    orientation: 'north'
  });

  constructor() {
    let row;
    for (let i = 0; i < this.boardSize; i++) {
      row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(1);
      }
      this.tiles.push(row);
    }

    this.player.moveForward();
    setTimeout(() => {
      this.player.moveBackward();
    }, 3000);

  }
}
