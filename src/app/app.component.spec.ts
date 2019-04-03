import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { ProgramEditorComponent } from './components/program-editor/program-editor.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { PlayerComponent } from './components/player/player.component';
import { DragulaModule } from 'ng2-dragula';
import { Environment } from 'app/models/environment';
import { Coordinates } from 'app/models/coordinates';
import { Level } from 'app/models/level';
import { Program } from 'app/models/program';
import { INSTRUCTIONS } from 'app/constants/instructions';
import { Result } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DragulaModule.forRoot()
      ],
      declarations: [
        AppComponent,
        EnvironmentComponent,
        ProgramEditorComponent,
        InstructionComponent,
        PlayerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should win', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.loadLevel(new Level({
      id: 1,
      boardSize: 3,
      startPos: new Coordinates(1, 1),
      winPos: new Coordinates(1, 0),
    }));
    app.program = new Program();
    app.program.instructions = [
      INSTRUCTIONS.find((instruction) => {
        return instruction.f === 'moveForward';
      })
    ];
    app.runProgram();
    console.log(app.environment.player);
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
