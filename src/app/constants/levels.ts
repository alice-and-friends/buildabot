import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';

export const LEVELS: Level[] = [
  {
    id: 1,
    boardSize: 3,
    startPos: new Coordinates(1, 2),
    winPos: new Coordinates(1, 0),
  },
];
