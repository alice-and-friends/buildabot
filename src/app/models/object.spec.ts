import { Object } from './object';
import { Coordinates } from 'app/models/coordinates';

describe('Object', () => {
  it('should create an instance', () => {
    expect(new Object({ position: new Coordinates({x: 0, y: 0 })})).toBeTruthy();
  });
});
