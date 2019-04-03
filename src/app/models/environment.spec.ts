import { Environment } from './environment';
import { LEVELS } from 'app/constants/levels';

describe('Environment', () => {
  it('should create an instance', () => {
    expect(new Environment(LEVELS[0])).toBeTruthy();
  });
});
