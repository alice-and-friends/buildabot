import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { RobotComponent } from './components/robot/robot.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { ProgramEditorComponent } from './components/program-editor/program-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentComponent,
    RobotComponent,
    InstructionComponent,
    ProgramEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DragulaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
