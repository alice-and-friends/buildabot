import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
import { getInstruction } from 'app/getters';

export const LEVELS = [
  new Level({
    id: 1,
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 1, y: 1}),
    instructionSet: [
      getInstruction('moveForward'),
    ],
  }),
  new Level({
    id: 2,
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 0, y: 1}),
    instructionSet: [
      getInstruction('moveForward'),
      getInstruction('turnLeft'),
    ],
  }),
  new Level({
    id: 3,
    boardSize: 5,
    startPos: new Coordinates({x: 2, y: 4}),
    winPos: new Coordinates({x: 0, y: 0}),
    instructionSet: [
      // All instructions allowed
    ],
  }),
];
