import { Instruction } from './instruction';
import Utils from 'app/utils';

export class Program {
  instructions: Instruction[];
  runtime: any;

  constructor() {
    this.instructions = [];
  }
  run(tick, tickRate) {
    tick();
    this.runtime = setInterval(() => {
      tick();
    }, tickRate);
  }
  stop() {
    clearInterval(this.runtime);
  }
  copy() {
    const p = new Program();
    p.instructions = Utils.copy(this.instructions);
    return p;
  }
}
