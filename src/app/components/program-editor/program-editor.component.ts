import { Component, Input } from '@angular/core';
import { COMMANDS } from 'app/constants/commands';
import { Command } from '../../models/command';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-program-editor',
  templateUrl: './program-editor.component.html',
})
export class ProgramEditorComponent {
  @Input() program: Command[];

  commands = COMMANDS;

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      copyItem: (command: Command) => {
        return Object.assign({}, command);
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
