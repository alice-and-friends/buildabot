import { Instruction } from './instruction';
import { INSTRUCTIONS } from 'app/constants/instructions';

describe('Instruction', () => {
  it('should create an instance', () => {
    expect(new Instruction(INSTRUCTIONS[0])).toBeTruthy();
  });
});
