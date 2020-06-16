import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(){}
  public home;
  
  ngOnInit(): void{
    this.home = localStorage.getItem('home');
  }
    title = 'font';  
  }
    
    //displayElement = false;