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
    name: 'Sprint',
    f: 'moveSprint',
    cssClass: 'move-sprint',
  },
  {
    id: 13,
    name: 'Move backward',
    f: 'moveBackward',
    cssClass: 'move-backward',
  },
  {
    id: 14,
    name: 'Turn left',
    f: 'turnLeft',
    cssClass: 'turn-left',
  },
  {
    id: 15,
    name: 'Turn right',
    f: 'turnRight',
    cssClass: 'turn-right',
  },
  {
    id: 16,
    name: 'Turn around',
    f: 'turnAround',
    cssClass: 'turn-around',
  },
  {
    id: 17,
    name: 'Sleep',
    f: 'sleep',
    cssClass: 'sleep',
  }
];
