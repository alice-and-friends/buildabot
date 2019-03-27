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
  player: Player = {
    id: 1,
    name: 'Alice'
  }

  constructor() {
    var row;
    for(var i = 0; i < this.boardSize; i++) {
      row = []
      for(var j = 0; j < this.boardSize; j++) {
        row.push(1);
      }
      this.tiles.push(row);
    }
  }
}
