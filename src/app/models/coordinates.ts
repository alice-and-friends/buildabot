export class Coordinates {
  x: number;
  y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  matches(c) {
    return this.x === c.x && this.y === c.y;
  }
}
