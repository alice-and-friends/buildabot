import { Component, Input } from '@angular/core';
import { Instruction } from 'app/models/instruction';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
})
export class InstructionComponent {
  @Input() instruction: Instruction;

  constructor() { }

}
