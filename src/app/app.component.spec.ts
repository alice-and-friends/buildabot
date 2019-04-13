import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { ProgramEditorComponent } from './components/program-editor/program-editor.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { RobotComponent } from './components/robot/robot.component';
import { DragulaModule } from 'ng2-dragula';
import { Instruction } from 'app/models/instruction';
import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
import { Program } from 'app/models/program';
import { Result } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DragulaModule.forRoot(),
        FormsModule
      ],
      declarations: [
        AppComponent,
        EnvironmentComponent,
        ProgramEditorComponent,
        InstructionComponent,
        RobotComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should win', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.loadLevel(new Level({
      id: 1,
      boardSize: 3,
      startPos: new Coordinates({x: 1, y: 1}),
      winPos: new Coordinates({x: 1, y: 0}),
    }));
    app.environment.player.program.instructions = [
      Instruction.getById('moveForward'),
    ];
    await app.runProgram();
    expect(app.result).toEqual(Result.success);
  });

  /*
  it(`should have as title 'buildabot'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('buildabot');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to buildabot!');
  });
  */
});
