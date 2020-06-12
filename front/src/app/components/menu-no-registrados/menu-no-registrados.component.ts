import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-no-registrados',
  templateUrl: './menu-no-registrados.component.html',
  styleUrls: ['./menu-no-registrados.component.css']
})
export class MenuNoRegistradosComponent implements OnInit {
  imagen1 = [ 'assets/img/logo-solo.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
