import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imagen1 = [ 'assets/img/logo-solo.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
