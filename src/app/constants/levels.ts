import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
// import { getInstruction } from 'app/getters';

export const LEVELS = [
  new Level({
    id: 1,
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 0, y: 0}),
    instructionSet: [
      // getters.getInstruction('moveForward'),
    ],
  }),
];
