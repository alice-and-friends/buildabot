import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentComponent } from './environment.component';
import { RobotComponent } from '../robot/robot.component';
import { Environment } from 'app/models/environment';
import { LEVELS } from 'app/constants/levels';

describe('EnvironmentComponent', () => {
  let component: EnvironmentComponent;
  let fixture: ComponentFixture<EnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnvironmentComponent,
        RobotComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentComponent);
    component = fixture.componentInstance;
    component.environment = new Environment(LEVELS[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
