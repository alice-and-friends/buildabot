import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  constructor() { }

  playerStyle = {'left.px': 0};

  moveForward() {
    console.log(1);
    this.playerStyle['left.px'] += 100;
  }

}
