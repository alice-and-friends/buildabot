import { Instruction } from './instruction';
import Utils from 'app/utils';

export enum State {
  running, stopped
}

export class Program {
  instructions: Instruction[];
  runtime: any;
  state: State;

  constructor() {
    this.instructions = [];
    this.state = State.stopped;
  }
  run(tick, tickRate) {
    this.state = State.running;
    tick();
    if (this.state === State.running) {
      this.runtime = setInterval(() => {
        tick();
      }, tickRate);
    }
  }
  stop(callback) {
    if (this.runtime) {
      clearInterval(this.runtime);
    }
    this.state = State.stopped;
    callback();
  }
  copy() {
    const p = new Program();
    p.instructions = Utils.copy(this.instructions);
    return p;
  }
}
