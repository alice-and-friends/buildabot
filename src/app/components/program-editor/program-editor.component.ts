import { Component, Input } from '@angular/core';
import { Instruction } from '../../models/instruction';
import { Program } from '../../models/program';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
})
export class ProgramEditorComponent {
  @Input() program: Program;
  @Input() instructionSet: Instruction[];

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('program-editor', {
      copy: (el, source) => {
        return source.id === 'instruction-set';
      },
      copyItem: (instruction: Instruction) => {
        return Object.assign({}, instruction);
      },
      accepts: (el, target) => {
        // To avoid dragging from program to instruction set
        return target.id !== 'instruction-set';
      },
      removeOnSpill: true,
      direction: 'horizontal',
    });
  }

  addInstruction(instruction) {
    this.program.instructions.push(instruction);
  }

}
