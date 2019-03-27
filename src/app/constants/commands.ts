import { Command } from 'app/models/command';

export const COMMANDS: Command[] = [
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
];
