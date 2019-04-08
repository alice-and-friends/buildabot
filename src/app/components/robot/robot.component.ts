import { Component, Input } from '@angular/core';
import { Robot } from 'app/models/robot';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
})
export class RobotComponent {
  @Input() robot: Robot;
  @Input() type: string;

  constructor() {
  }

}
