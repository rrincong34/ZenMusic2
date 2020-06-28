import { Component, OnInit } from '@angular/core';

//importar el modelo
import { Cancion } from '../../modelo/cancion';

//importar el servicio
import { CancionService } from '../../services/cancion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cancion',
  templateUrl: './registro-cancion.component.html',
  styleUrls: ['./registro-cancion.component.css'],
})
export class RegistroCancionComponent implements OnInit {
  //declarar variable de tipo modelo
  public cancionRegistrada: Cancion;

  //declarar una variable de tipo de arreglo
  public cancionesEncontradas: any = [];

  // Declarar la variable archivoSubir de tipo File
  public archivoSubir: File;

  // Declarar la variable archivoSubir de tipo File
  public archivoSubirImg: File;

  // Declarar la variable url
  public url: String;

  constructor(private cancionService: CancionService) {
    this.url = cancionService.url;
  }

  ngOnInit(): void {
    // this.mostrarCanciones();

    this.cancionRegistrada = new Cancion(
      '',
      '',
      '',
      '',
      '',
      '',
      1992,
      null,
      null
    );

    this.mostrarCanciones;
  }
  // Consumo servicio con el metodo agregarCancion()
  // Método subirArchivo
  subirArchivo(fileInput: any) {
    this.archivoSubir = <File>fileInput.target.files[0];
  }

  subirArchivoImg(fileInput: any) {
    this.archivoSubirImg = <File>fileInput.target.files[0];
  }

  agregarCancion() {
    this.cancionService.crearCancion(this.cancionRegistrada).subscribe(
      (response: any) => {
        let canciones = response.cancion;
        this.cancionRegistrada = canciones;
        console.log(`el mensaje de guardar canción es ${response.message}`);
        if (!this.cancionRegistrada._id) {
          Swal.fire({
            icon: 'warning',
            title: '<h5>Error al guardar canción</h5>',
            timer: 11500,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title:
              '¡Canción agregada!, título' +
              this.cancionRegistrada.nombreCancion,
            timer: 11500,
          });

          // Validación y consumo del servicio de la carga de archivo
          if (!this.archivoSubir) {
            Swal.fire({
              icon: 'warning',
              title: `<h5> No hay ningún archivo de canción</h5>`,
              timer: 11500,
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: `<h5> Tu archivo es ${this.archivoSubir.name}</h5>`,
              timer: 11500,
            });
            this.cancionService
              .subirArchivo(this.archivoSubir, this.cancionRegistrada._id)
              .subscribe((result: any) => {
                this.cancionRegistrada.archivo = result.archivo;
                console.log(
                  `el mensaje de guardar archivo es ${result.message}`
                );
              });
          }
          // Validación y consumo del servicio de la carga de imagen
          if (!this.archivoSubirImg) {
            Swal.fire({
              icon: 'warning',
              title: `<h5> No hay ninguna imagen</h5>`,
              timer: 11500,
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: `<h5> Tu imagen es ${this.archivoSubirImg.name}</h5>`,
              timer: 11500,
            });
            this.cancionService
              .subirArchivo(this.archivoSubirImg, this.cancionRegistrada._id)
              .subscribe((result: any) => {
                this.cancionRegistrada.imagen = result.imagen;
                console.log(
                  `el mensaje de guardar imagen es ${result.message}`
                );
              });
          }
          // Cierre Validación
          this.mostrarCanciones;
        }
      },

      (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }

  //Consumo servicio obtenerCanciones con el metodo mostrarCanciones()
  mostrarCanciones() {
    this.cancionService.obtenerCanciones().subscribe(
      (response: any) => {
        this.cancionesEncontradas = response.canciones;
        console.log('tarjooo canciones');
        // document.getElementById('mostrarImagen').setAttribute('src', rutaImagen);
        document.getElementById(
          'canciones'
        ).innerHTML = this.cancionesEncontradas;
        // Cierre mostrar imagen
      },
      (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log('tuvo un error');
        }
      }
    );
  }

  //Consumo servicio actualizarCancion con el metodo editarCancion()
  editarCancion(cancion) {
    this.cancionService
      .actualizarCancion(cancion._id, cancion)
      .subscribe((response: any) => {
        if (!response.cancion) {
          Swal.fire({
            icon: 'warning',
            title: '<h5>Error al actualizar canción</h5>',
            timer: 11500,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title:
              '¡Canción actualizada!, título ' +
              this.cancionRegistrada.nombreCancion,
            timer: 11500,
          });
        }
        (error) => {
          var errorMensaje = <any>error;
          if (errorMensaje != null) {
            console.log(error);
          }
        };
      });
  }
  //Consumo de servicio eliminar Tarea
  eliminarCancion(idcancion) {
    this.cancionService.eliminarCancion(idcancion).subscribe(
      (response: any) => {
        if (response.cancion) {
          alert('La tarea ha sido eliminada correctamente');
          this.mostrarCanciones();
        } else {
          alert('No se pudo eliminar la tarea');
        }
      },
      (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }

  /*  subirArchivo(idcancion){
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
  } */

  /*  subirArchivoImg(idcancion) {
    this.cancionService.SubirArchivoImg(idcancion).subscribe(
      (response: any) => {
        if (response.cancion) {
          alert('El archivo de la cancion ha sido cargado correctamente');
          this.mostrarCanciones();
        } else {
          alert('No se pudo cargar el archivó');
        }
      },
      (error) => {
        var errorMensaje = <any>error;
        if (errorMensaje != null) {
          console.log(error);
        }
      }
    );
  }

   */
}
