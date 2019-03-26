import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  boardSize = 2;
  tiles = [];

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
