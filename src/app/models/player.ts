export class Player {
  posX: number;
  posY: number;
  orientation: string;

  constructor(opts) {
    this.posX = opts.posX;
    this.posY = opts.posY;
    this.orientation = opts.orientation;
  }

  /*
   * Functions for moving the player token
   */
  move(distance) {
    switch (this.orientation) {
      case 'north':
        this.posY -= distance;
        break;
      case 'east':
        this.posX += distance;
        break;
      case 'south':
        this.posY += distance;
        break;
      case 'west':
        this.posX -= distance;
        break;
    }
  }
  moveForward() {
    this.move(1);
  }
  moveBackward() {
    this.move(-1);
  }

  /*
   * Functions for turning the player token
   */
  turn(clockwise) {
    const dirs = ['north', 'east', 'south', 'west'];
    if (!clockwise) {
      dirs.reverse();
    }
    const index = dirs.indexOf(this.orientation);
    this.orientation = dirs[index + 1] || dirs[0];
  }
  turnLeft() {
    this.turn(false);
  }
  turnRight() {
    this.turn(true);
  }
}
