import { Component, OnInit } from '@angular/core';
import { Lista } from '../../modelo/lista';
import { ListaService} from '../../services/lista.service';
import Swal from 'sweetalert2';

// Importar el modelo
import { Usuario } from '../../modelo/usuario';
// Importar el servicio
import { UsuarioService } from '../../services/usuario.service';


// Importar el modelo
import { Cancion } from '../../modelo/cancion';
// Importar el servicio
import { CancionService } from '../../services/cancion.service';


// Importar el manejador de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaCanciones : Lista;
  public identidad;
  public listasUsuario : any=[];

  constructor(
    private listaService : ListaService,
    private usuarioService : UsuarioService,
    private _router : Router  //ruta para el menu
  ) {
    this.listaCanciones = new Lista("", "","",[""]);
  }

  mostrarListasUsuario(){
    this.listaService.obtenerListasUsuario(this.identidad._id).subscribe(
      (response : any)=>{
        this.listasUsuario = response.lista;
        console.log(this.listasUsuario);
      }
    )
   }

  ngOnInit(): void {

           //mostar lista cancciones
           this.identidad = JSON.parse(localStorage.getItem('sesion'));
           console.log(this.identidad);
           this.mostrarListasUsuario();
  }

}
