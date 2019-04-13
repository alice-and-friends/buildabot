import { INSTRUCTIONS } from 'app/constants/instructions';

export class Instruction {
  id: number;
  name: string;
  f: string;
  cssClass: string;

  static getById(query) {
    const instruction = INSTRUCTIONS.find((i) => {
      return i.f === query;
    });
    if (!instruction) {
      console.warn('Instruction not found:', query);
    }
    return new Instruction(instruction);
  }

  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
    this.f = opts.f;
    this.cssClass = opts.cssClass;
  }
}
