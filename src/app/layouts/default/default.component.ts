import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarAberto = false;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarAberto = !this.sideBarAberto;
  }

}
