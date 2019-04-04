import { Player } from 'app/models/player';
import { Coordinates } from 'app/models/coordinates';

export class Environment {
  boardSize: number;
  player: Player;
  tiles: [][];
  winPos: Coordinates;

  constructor(level) {
    this.boardSize = level.boardSize;
    this.tiles = [];

    this.player = new Player({
      position: new Coordinates({x: level.startPos.x, y: level.startPos.y}),
      rotation: 0,
    });
    this.winPos = level.winPos;

    let row;
    for (let i = 0; i < this.boardSize; i++) {
      row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(1);
      }
      this.tiles.push(row);
    }
  }

  // Resets the environment to starting conditions for the current level
  reset(level) {
    this.player.position = new Coordinates({x: level.startPos.x, y: level.startPos.y});
    this.player.rotation = 0;
  }
}
