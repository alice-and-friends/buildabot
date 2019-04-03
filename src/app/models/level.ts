import { Coordinates } from 'app/models/coordinates';

export class Level {
  id: number;
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;

  constructor(opts) {
    this.id = opts.id;
    this.boardSize = opts.boardSize;
    this.startPos = opts.startPos;
    this.winPos = opts.winPos;
  }
}
