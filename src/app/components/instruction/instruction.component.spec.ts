import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstructionComponent } from './instruction.component';
import { INSTRUCTIONS } from 'app/constants/instructions';

describe('InstructionComponent', () => {
  let component: InstructionComponent;
  let fixture: ComponentFixture<InstructionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionComponent);
    component = fixture.componentInstance;
    component.instruction = INSTRUCTIONS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
