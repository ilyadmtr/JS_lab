import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threebtns',
  templateUrl: './threebtns.component.html',
  styleUrls: ['./threebtns.component.css']
})
export class ThreebtnsComponent implements OnInit {
  info: string = '';
  constructor() { }
  setAuto(){
    this.info = 'auto';
  }
  setPlane(){
    this.info = 'plane';
  }
  setShip(){
    this.info = 'ship';
  }
  ngOnInit(): void {
  }

}
