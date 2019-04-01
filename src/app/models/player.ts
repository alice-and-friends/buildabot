import { Coordinates } from 'app/models/coordinates';

export class Player {
  position: Coordinates;
  rotation: number;

  constructor(opts) {
    this.position = opts.position;
    this.rotation = opts.rotation;
  }

  /*
   * Functions for moving the player token
   */
  move(distance) {
    const r = this.rotation % 360;
    if (r === 0) {
      this.position.y -= distance;
    }
    else if (r === 90 || r === -270) {
      this.position.x += distance;
    }
    else if (Math.abs(r) === 180) {
      this.position.y += distance;
    }
    else {
      this.position.x -= distance;
    }
  }
  moveForward() {
    this.move(1);
  }
  moveSprint() {
    this.move(2);
  }
  moveBackward() {
    this.move(-1);
  }

  /*
   * Functions for turning the player token
   */
  turnLeft() {
    this.rotation -= 90;
  }
  turnRight() {
    this.rotation += 90;
  }
  turnAround() {
    this.rotation -= 180;
  }

  /*
   * Misc instructions
   */
  sleep() {
    // do nothing
  }
}
