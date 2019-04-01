import { Player } from 'app/models/player';

export class Environment {
  boardSize: number;
  player: Player;
  tiles: [][];

  constructor(level) {
    this.boardSize = level.boardSize;
    this.tiles = [];

    this.player = new Player({
      position: level.startPos,
      rotation: 0,
    });

    let row;
    for (let i = 0; i < this.boardSize; i++) {
      row = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(1);
      }
      this.tiles.push(row);
    }
  }

  runProgram(program) {
    const instructions = JSON.parse(JSON.stringify(program.instructions));
    console.log('Executing instruction sequence:', instructions);
    const myInterval = setInterval(() => {
      if (instructions && instructions.length) {
        const c = instructions.shift();
        this.player[c.f]();
      }
      else {
        clearInterval(myInterval);
      }
    }, 600);
  }
}
