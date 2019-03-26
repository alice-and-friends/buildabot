import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  tiles = [
    [1, 2],
    [1, 2],
  ];

}
