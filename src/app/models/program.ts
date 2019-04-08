import { Instruction } from './instruction';

export class Program {
  instructions: Instruction[];

  constructor(opts) {
    this.instructions = opts.instructions || [];
  }
}
