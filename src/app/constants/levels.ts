import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
// import { getInstruction } from 'app/getters';

export const LEVELS = [
  new Level({
    id: 1,
    boardSize: 3,
    startPos: new Coordinates(1, 2),
    winPos: new Coordinates(0, 0),
    instructionSet: [
      // getters.getInstruction('moveForward'),
    ],
  }),
];
