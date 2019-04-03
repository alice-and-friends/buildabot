import { Program } from './program';
import { Environment } from 'app/models/environment';
import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';

function getTestEnv() {
  const level = new Level({
    id: 1,
    boardSize: 3,
    startPos: new Coordinates(1, 1),
    winPos: new Coordinates(0, 0),
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
    expect(player.position).toEqual(new Coordinates(1, 0));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(2, 0));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(2, 1));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(1, 1));
    player.turnRight();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(1, 0));
  });

  it('should move in a circle, counter-clockwise forwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(1, 0));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(0, 0));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(0, 1));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(1, 1));
    player.turnLeft();
    player.moveForward();
    expect(player.position).toEqual(new Coordinates(1, 0));
  });

  it('should move in a circle, clockwise backwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 2));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(2, 2));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(2, 1));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 1));
    player.turnLeft();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 2));
  });

  it('should move in a circle, counter-clockwise backwards', () => {
    const player = getTestEnv().player;

    // Start a series of movements and check the resulting positions
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 2));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(0, 2));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(0, 1));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 1));
    player.turnRight();
    player.moveBackward();
    expect(player.position).toEqual(new Coordinates(1, 2));
  });
});
