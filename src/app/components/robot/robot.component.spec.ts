import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RobotComponent } from './robot.component';
import { Robot } from 'app/models/robot';
import { Coordinates } from 'app/models/coordinates';

describe('RobotComponent', () => {
  let component: RobotComponent;
  let fixture: ComponentFixture<RobotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotComponent);
    component = fixture.componentInstance;
    component.robot = new Robot({
      position: new Coordinates({x: 0, y: 0}),
      rotation: 0,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
