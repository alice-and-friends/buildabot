import { Player } from 'app/models/player';

export class Environment {
  boardSize: number;
  player: Player;
  tiles: [][];

  constructor(opts) {
    this.boardSize = opts.boardSize;
    this.tiles = [];

    this.player = new Player({
      posX: 0,
      posY: 1,
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
    const commands = JSON.parse(JSON.stringify(program.commands));
    console.log('Executing command sequence:', commands);
    const myInterval = setInterval(() => {
      if (commands && commands.length) {
        const c = commands.shift();
        this.player[c.f]();
      }
      else {
        clearInterval(myInterval);
      }
    }, 600);
  }
}
