import { Program } from './program';
import { Environment } from 'app/models/environment';
import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';

function getTestEnv() {
  const level = new Level({
    id: 1,
    boardSize: 3,
    startPos: new Coordinates({x: 1, y: 1}),
    winPos: new Coordinates({x: 0, y: 0}),
  });
  return new Environment(level);
}

describe('Program', () => {
  it('should create an instance', () => {
    expect(new Program()).toBeTruthy();
  });

  it('should move in a circle, clockwise forwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y :0}));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:2, y :0}));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:2, y :1}));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y :1}));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 0}));
  });

  it('should move in a circle, counter-clockwise forwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 0}));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:0, y: 0}));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:0, y: 1}));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 1}));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 0}));
  });

  it('should move in a circle, clockwise backwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 2}));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:2, y: 2}));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:2, y: 1}));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 1}));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 2}));
  });

  it('should move in a circle, counter-clockwise backwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 2}));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:0, y: 2}));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:0, y: 1}));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 1}));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates({x:1, y: 2}));
  });
});
