import { Coordinates } from './coordinates';

describe('Coordinates', () => {
  it('should create an instance', () => {
    expect(new Coordinates({x: 0, y: 0})).toBeTruthy();
  });
});
