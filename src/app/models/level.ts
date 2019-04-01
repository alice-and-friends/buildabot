import { Coordinates } from 'app/models/coordinates';

export class Level {
  id: number;
  boardSize: number;
  startPos: Coordinates;
  winPos: Coordinates;
}
