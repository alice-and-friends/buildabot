import { Player } from './player';
import { Coordinates } from 'app/models/coordinates';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player({ position: new Coordinates({x: 0, y: 0}), rotation: 0 })).toBeTruthy();
  });
});
