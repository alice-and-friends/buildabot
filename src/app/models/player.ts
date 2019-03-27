export class Player {
  posX: number;
  posY: number;
  rotation: number;

  constructor(opts) {
    this.posX = opts.posX;
    this.posY = opts.posY;
    this.rotation = opts.rotation;
  }

  /*
   * Functions for moving the player token
   */
  move(distance) {
    switch (this.rotation % 360) {
      case 0:
        this.posY -= distance;
        break;
      case 90:
        this.posX += distance;
        break;
      case 180:
        this.posY += distance;
        break;
      case 270:
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
  turnLeft() {
    this.rotation -= 90;
  }
  turnRight() {
    this.rotation += 90;
  }
}
