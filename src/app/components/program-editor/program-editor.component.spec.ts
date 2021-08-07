import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';

import { ProgramEditorComponent } from './program-editor.component';
import { InstructionComponent } from 'app/components/instruction/instruction.component';
import { Program } from 'app/models/program';

describe('ProgramEditorComponent', () => {
  let component: ProgramEditorComponent;
  let fixture: ComponentFixture<ProgramEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DragulaModule.forRoot()
      ],
      declarations: [
        ProgramEditorComponent,
        InstructionComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEditorComponent);
    component = fixture.componentInstance;
    component.program = new Program({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
