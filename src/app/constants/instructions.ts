import { Instruction } from 'app/models/instruction';

export const INSTRUCTIONS: Instruction[] = [

  /*
   * Movement
   */
  new Instruction({
    id: 11,
    name: 'Move forward',
    f: 'moveForward',
    cssClass: 'move-forward',
  }),
  new Instruction({
    id: 12,
    name: 'Sprint',
    f: 'moveSprint',
    cssClass: 'move-sprint',
  }),
  new Instruction({
    id: 13,
    name: 'Move backward',
    f: 'moveBackward',
    cssClass: 'move-backward',
  }),

  /*
   * Turning
   */
  new Instruction({
    id: 14,
    name: 'Turn left',
    f: 'turnLeft',
    cssClass: 'turn-left',
  }),
  new Instruction({
    id: 15,
    name: 'Turn right',
    f: 'turnRight',
    cssClass: 'turn-right',
  }),
  new Instruction({
    id: 16,
    name: 'Turn around',
    f: 'turnAround',
    cssClass: 'turn-around',
  }),

  /*
   * Miscellaneous
   */
  new Instruction({
    id: 17,
    name: 'Sleep',
    f: 'sleep',
    cssClass: 'sleep',
  })
];
