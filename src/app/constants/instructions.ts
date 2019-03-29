import { Instruction } from 'app/models/instruction';

export const INSTRUCTIONS: Instruction[] = [
  {
    id: 11,
    name: 'Move forward',
    f: 'moveForward',
  },
  {
    id: 12,
    name: 'Move backward',
    f: 'moveBackward',
  },
  {
    id: 13,
    name: 'Turn left',
    f: 'turnLeft',
  },
  {
    id: 14,
    name: 'Turn right',
    f: 'turnRight',
  },
  {
    id: 15,
    name: 'Turn around',
    f: 'turnAround',
  },
];
