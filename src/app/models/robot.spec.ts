import { Robot } from './robot';
import { Coordinates } from 'app/models/coordinates';

describe('Robot', () => {
  it('should create an instance', () => {
    expect(new Robot({ position: new Coordinates({x: 0, y: 0}), rotation: 0 })).toBeTruthy();
  });
});
