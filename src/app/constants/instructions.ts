import { Instruction } from 'app/models/instruction';

export const INSTRUCTIONS: Instruction[] = [
  {
    id: 11,
    name: 'Move forward',
    f: 'moveForward',
    cssClass: 'move-forward',
  },
  {
    id: 12,
    name: 'Move backward',
    f: 'moveBackward',
    cssClass: 'move-backward',
  },
  {
    id: 13,
    name: 'Turn left',
    f: 'turnLeft',
    cssClass: 'turn-left',
  },
  {
    id: 14,
    name: 'Turn right',
    f: 'turnRight',
    cssClass: 'turn-right',
  },
  {
    id: 15,
    name: 'Turn around',
    f: 'turnAround',
    cssClass: 'turn-around',
  },
];
