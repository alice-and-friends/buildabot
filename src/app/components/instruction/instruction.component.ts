import { Component, Input } from '@angular/core';
import { Command } from 'app/models/command';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
})
export class InstructionComponent {
  @Input() instruction: Command;

  constructor() { }

}
