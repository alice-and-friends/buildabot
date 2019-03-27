export class Player {
  posX: number;
  posY: number;
  orientation: string;

  constructor(opts) {
    this.posX = opts.posX;
    this.posY = opts.posY;
    this.orientation = opts.orientation;
  }

  moveForward() {
    console.log('Moving forward');
    switch(this.orientation) {
      case 'north':
        this.posY -= 1;
        break;
      case 'east':
        this.posX += 1;
        break;
      case 'south':
        this.posY += 1;
        break;
      case 'west':
        this.posX -= 1;
        break;
    }
  }
  moveBackward() {
    console.log('Moving backward');
    switch(this.orientation) {
      case 'north':
        this.posY += 1;
        break;
      case 'east':
        this.posX -= 1;
        break;
      case 'south':
        this.posY -= 1;
        break;
      case 'west':
        this.posX += 1;
        break;
    }
  }
  turnLeft() {
    console.log('Turning left');
    const dirs = ['north', 'east', 'south', 'west'];
    const index = dirs.indexOf(this.orientation);
    this.orientation = dirs[index - 1] || dirs[dirs.length - 1];
  }
  turnRight() {
    console.log('Turning right');
    const dirs = ['north', 'east', 'south', 'west'];
    const index = dirs.indexOf(this.orientation);
    this.orientation = dirs[index + 1] || dirs[0];
  }
}
