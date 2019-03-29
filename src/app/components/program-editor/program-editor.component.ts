import { Component, Input } from '@angular/core';
import { INSTRUCTIONS } from 'app/constants/instructions';
import { Instruction } from '../../models/instruction';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
})
export class ProgramEditorComponent {
  @Input() program: Instruction[];

  instructions = INSTRUCTIONS;

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (instruction: Instruction) => {
        return Object.assign({}, instruction);
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      },
      removeOnSpill: true,
      direction: 'horizontal',
    });
  }

}
