import { Component, OnInit } from '@angular/core';

//importar el modelo
import { Canciones } from '../../modelo/cancion';

//importar el servicio
import { CancionesService } from '../../services/cancion.service'; 



@Component({
  selector: 'app-registro-cancion',
  templateUrl: './registro-cancion.component.html',
  styleUrls: ['./registro-cancion.component.css']
})
export class RegistroCancionComponent implements OnInit {

  //declarar variable de tipo modelo
  public CancionRegistrada: Canciones;

  //declarar una variable de tipo de arreglo
  public CancionesEncontradas : any=[];

  // Declarar la variable archivoSubir de tipo File
  public subirArchivo : File;

  // Declarar la variable archivoSubir de tipo File
  public subirArchivoImg : File;


  // Declarar la variable url
  public url : String;


  constructor(private cancionService: CancionesService ) {
    this.url = cancionService.url;
   }

  ngOnInit(): void {
   // this.mostrarCanciones();
  }
  // Consumo servicio con el metodo agregarCancion()
   // Método subirArchivo
   subirArchivo(fileInput : any){
    this.subirArchivo = <File>fileInput.target.files[0];
  }

  agregarCancion(){
    this.cancionService.crearCancion(this.CancionRegistrada).subscribe((response: any)=>{
      let canciones = response.cancion;
      this.CancionRegistrada = canciones;
      if(!this.CancionRegistrada._id){
       alert("Error al registrar tarea");
       
      }else{
        alert(`Asignacion de tarea exitosa!!, ${this.CancionRegistrada.nombreCancion} tienen una nueva tarea`);
        this.CancionRegistrada = new Canciones("","","","","","",1992,null,null);
      this.mostrarCanciones;
       }

   },
 
   (error)=>{
     var errorMensaje = <any>error;
     if(errorMensaje != null){
       console.log(error);

     }
     
   });



    
  
  
  };
  //Consumo servicio obtenerCanciones con el metodo mostrarCanciones()
mostrarCanciones(){
  this.cancionService.obtenerCanciones().subscribe(
    (response : any)=>{
      this.CancionesEncontradas = response.canciones;
    },
    (error)=>{
      var errorMensaje =<any>error;
      if(errorMensaje != null){
        console.log(error);
    }
  }
  );
  }

  //Consumo servicio actualizarCancion con el metodo editarCancion()
  editarCancion(cancion){
    this.cancionService.actualizarCancion(cancion._id, cancion).subscribe(
      (response: any)=>{
        if(response.cancion){
          alert('La tarea a sido actualizada correctamente!!!');
          this.mostrarCanciones();
        }else{
          alert('No fue posible actualizar tarea');
      }
    },
    (error) => {
      var errorMensaje = <any>error;
      if(errorMensaje != null){
        console.log(error);
      }
    }
    );
  }
  //Consumo de servicio eliminar Tarea
  eliminarCancion(idcancion){
    this.cancionService.eliminarCancion(idcancion).subscribe(
      (response: any)=>{
        if(response.cancion){
          alert('La tarea ha sido eliminada correctamente');
          this.mostrarCanciones();
        }else{
          alert('No se pudo eliminar la tarea');
        }
      },
      (error) => {
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

  subirArchivo(idcancion){
    this.cancionService.SubirArchivo(idcancion).subscribe(
      (response: any)=>{
        if(response.cancion){
          alert('El archivo de la cancion ha sido cargado correctamente');
          this.mostrarCanciones();
        }else{
          alert('No se pudo cargar el archivó');
        }
      },
      (error) => {
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

  subirArchivoImg(idcancion){
    this.cancionService.SubirArchivoImg(idcancion).subscribe(
      (response: any)=>{
        if(response.cancion){
          alert('El archivo de la cancion ha sido cargado correctamente');
          this.mostrarCanciones();
        }else{
          alert('No se pudo cargar el archivó');
        }
      },
      (error) => {
        var errorMensaje = <any>error;
        if(errorMensaje != null){
          console.log(error);
        }
      }
    );
  }

   

}
