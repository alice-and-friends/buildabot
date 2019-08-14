import { Program } from 'app/models/program';
import { Robot } from 'app/models/robot';
import { Coordinates } from 'app/models/coordinates';

export class Environment {
  boardSize: number;
  player: Robot;
  enemies: Robot[];
  objects: any[];
  tiles: [][];
  winPos: Coordinates;

  constructor(level) {
    this.boardSize = level.boardSize;
    this.tiles = [];

    this.player = new Robot({
      position: new Coordinates({x: level.startPos.x, y: level.startPos.y}),
      rotation: 0,
      program: new Program({}),
    });
    this.enemies = level.enemies;
    this.objects = level.objects;
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

  //TODO remove function
  // Resets the environment to starting conditions for the current level
  reset(level) {
    this.player.position = new Coordinates({x: level.startPos.x, y: level.startPos.y});
    this.player.rotation = 0;

    // TODO: Reset enemies positions
  }
}
