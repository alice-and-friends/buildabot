import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
import { getInstruction } from 'app/getters';

export const LEVELS = [
  new Level({
    id: 1,
    title: 'Tutorial (1/2)',
    description: [
      'Welcome! In this tutorial you need to program your robot to collect a battery.',
      'Click on the <code>Forward</code> instruction (that big arrow down there 👇) to add it to the program. ' +
      'Then click on <code class="color-dark-green">Run program</code>.'
    ],
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 1, y: 1}),
    instructionSet: [
      getInstruction('moveForward'),
    ],
  }),
  new Level({
    id: 2,
    title: 'Tutorial (2/2)',
    description: [
      'This time you will need to do some turning in order to reach the battery. ' +
      'Click on the <code>instructions</code> below to add them to the program.',
      'Tip: You can add the same instruction more than once.'
    ],
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
