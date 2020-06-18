import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(  ){
   }

  public pagina;
  public usuario;
  public existe;
  
  ngOnInit(): void{
    
    this.pagina = window.location.pathname;
    this.usuario = localStorage.getItem('sesion');
    console.log(`path: ${this.pagina}`)

    if(!this.usuario){
      this.existe = 'NO';
    } else{
      this.existe = 'SI';
    }

    console.log(`existe usuario para path: ${this.existe}` );
  }
    title = 'font';  
  }
    
    //displayElement = false;