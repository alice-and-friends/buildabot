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
    switch (this.rotation % 360) {
      case 0:
        this.position.y -= distance;
        break;
      case 90:
        this.position.x += distance;
        break;
      case 180:
        this.position.y += distance;
        break;
      case 270:
        this.position.x -= distance;
        break;
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
}
