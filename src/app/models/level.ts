import { Coordinates } from 'app/models/coordinates';
import { Instruction } from 'app/models/instruction';

export class Level {
  id: number;
  title: string;
  description: string[]; // Each string is rendered as a <p>paragraph</p>
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;
  instructionSet: Instruction[];

  constructor(opts) {
    this.id = opts.id;
    this.title = opts.title || '';
    this.description = opts.description || [];
    this.boardSize = opts.boardSize;
    this.startPos = new Coordinates({x: opts.startPos.x, y: opts.startPos.y});
    this.winPos = new Coordinates({x: opts.winPos.x, y: opts.winPos.y});
    this.instructionSet = opts.instructionSet || [];
  }
}
