import { Coordinates } from 'app/models/coordinates';

export class Object {
  position: Coordinates;
  type: string;

  constructor(opts) {
    this.position = new Coordinates({x: opts.position.x, y: opts.position.y});
  }
}

export class Mine extends Object {
  type = 'mine';
  activated = false;
}
