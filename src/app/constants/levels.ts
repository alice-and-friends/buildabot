import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';

export const LEVELS = [
  new Level({
    id: 1,
    title: 'Tutorial (1/3)',
    description: [
      'Welcome! In this tutorial you need to program your robot to collect a battery.',
      'Click on the <code>Forward instruction</code> in the <code class="color-dark-green">Instruction set</code> ' +
      'to add it to the <code class="color-dark-green">Program Memory</code>. ' +
      'Then click on <code class="color-dark-green">Run program</code> to execute the instruction.'
    ],
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 1, y: 1}),
    instructionSet: [
      'moveForward',
    ],
  }),
  new Level({
    id: 2,
    title: 'Tutorial (2/3)',
    description: [
      'This time you will need to do some turning in order to reach the battery. ' +
      'Click on the <code>instructions</code> below to add them to the program. Run the program when you are ready.',
      '<span class="bubble">Tip: You can add the same instruction more than once.</span>'
    ],
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 2}),
    winPos: new Coordinates({x: 0, y: 1}),
    instructionSet: [
      'moveForward',
      'turnLeft',
    ],
  }),
  new Level({
    id: 3,
    title: 'Mine or yours?',
    description: [
      'Avoid mines at all costs!'
    ],
    boardSize: 5,
    startPos: new Coordinates({x: 2, y: 4}),
    winPos: new Coordinates({x: 2, y: 1}),
    instructionSet: [
      'moveForward',
      'moveBackward',
      'turnLeft',
      'turnRight',
    ],
    objects: [
      {
        type: 'mine',
        position: new Coordinates({x: 2, y: 2}),
      },
    ]
  }),
  /*
  new Level({
    id: 4,
    boardSize: 5,
    startPos: new Coordinates({x: 2, y: 4}),
    winPos: new Coordinates({x: 0, y: 0}),
    instructionSet: [
      // All instructions allowed
    ],
    enemies: [
      new Robot({
        position: new Coordinates({x: 4, y: 2}),
        rotation: -90,
        program: new Program({
          instructions: [
            getInstruction('moveForward'),
            getInstruction('moveForward'),
            getInstruction('moveForward'),
            getInstruction('moveForward'),
          ],
        }),
      }),
    ],
  }),
  */
];
