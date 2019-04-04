export class Coordinates {
  x: number;
  y: number;

  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
  }

  matches(c) {
    return this.x === c.x && this.y === c.y;
  }
}
