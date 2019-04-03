import { Coordinates } from 'app/models/coordinates';

export class Level {
  id: number;
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;

  constructor(opts) {
    this.id = opts.id;
    this.boardSize = opts.boardSize;
    this.startPos = new Coordinates(opts.startPos.x, opts.startPos.y);
    this.winPos = new Coordinates(opts.winPos.x, opts.winPos.y);
  }
}
