import { Coordinates } from 'app/models/coordinates';
import { Instruction } from 'app/models/instruction';

export class Level {
  id: number;
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;
  instructionSet: Instruction[];

  constructor(opts) {
    this.id = opts.id;
    this.boardSize = opts.boardSize;
    this.startPos = new Coordinates(opts.startPos.x, opts.startPos.y);
    this.winPos = new Coordinates(opts.winPos.x, opts.winPos.y);
    this.instructionSet = opts.instructionSet || [];
  }
}
