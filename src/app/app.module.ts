import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { PlayerComponent } from './components/player/player.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { ProgramEditorComponent } from './components/program-editor/program-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    PlayerComponent,
    InstructionComponent,
    ProgramEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragulaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
