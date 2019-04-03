import { Component, Input } from '@angular/core';
import { Environment } from 'app/models/environment';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
})
export class EnvironmentComponent {
  @Input() environment: Environment;

  constructor() {
  }
}
