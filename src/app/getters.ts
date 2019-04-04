import { INSTRUCTIONS } from './constants/instructions';

export const getInstruction = (query) => {
  const instruction = INSTRUCTIONS.find((i) => {
    return i.f === query;
  });
  if (!instruction) {
    console.warn('Instruction not found:', query);
  }
  return instruction;
};
