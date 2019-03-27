import { Component, Input } from '@angular/core';
import { Command } from 'app/models/command';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent {
  @Input() instruction: Command;

  constructor() { }

}
