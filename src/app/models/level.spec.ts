import { Level } from './level';
import { LEVELS } from 'app/constants/levels';

describe('Level', () => {
  it('should create an instance', () => {
    expect(new Level(LEVELS[0])).toBeTruthy();
  });
});
