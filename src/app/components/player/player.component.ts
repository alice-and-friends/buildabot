import { Component, Input } from '@angular/core';
import { Player } from 'app/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() player: Player;

  constructor() {
  }

}
