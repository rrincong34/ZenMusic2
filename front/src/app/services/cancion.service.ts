import { Injectable } from '@angular/core';

//importar el modulo HttpClient que nos va a ofrecer acceso a los metodos get, post, put y delete
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
// Se encargara de recojer las peticiones que hagamos al suscribirnos a un servicio
import { Observable } from 'rxjs';

@Injectable()
export class CancionService {
  //Creamos la variable que contiene la ruta de la api que vamos a consumir
  url = 'http://localhost:3000/api/';

  /*
    Creamos una variable privada de tipo HttpClient que nos permitir
    tener acceso a los metodos post, put, get & delete para interactuar correctamente con nuestraa API
    */
  constructor(private _http: HttpClient) {}
  //Servicio crear cancion
  crearCancion(cancionNueva) {
    let params = JSON.stringify(cancionNueva);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    //localhost:3000/api/ -> spi.post('/' , TareasControl.crearTarea)
    return this._http
      .post(this.url + '/registro-Cancion', params, options)
      .pipe(map((res) => res));
  }

  // Servicio Obtener Canciones
  obtenerCanciones() {
    return this._http.get(this.url).pipe(map((res) => res));
  }

  // Servicio Actualizar Cancion
  actualizarCancion(idCancion, cancionActualizada) {
    let params = JSON.stringify(cancionActualizada);
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this._http
      .put(this.url + 'actualizar-cancion/' + idCancion, params, options)
      .pipe(map((res) => res));
  }

  //Servicio Eliminar Cancion
  eliminarCancion(idCancion) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._http
      .delete(this.url + idCancion, options)
      .pipe(map((res) => res));
  }

  subirArchivo(file: File, idCancion) {
    let formData = new FormData();
    formData.append('imagen',file);
    return this._http
      .put(this.url + 'subirArchivoCancion/' + idCancion, formData)
      .pipe(map((res) => res));
  }

  subirArchivoImg(file: File, idCancion) {
    let formData = new FormData();
    formData.append('imagen',file);
    return this._http
      .put(this.url + 'subirImagenCancion/' + idCancion, formData)
      .pipe(map((res) => res));
  }

  mostrarImagenCancion(imageFile){

return this._http
.get(this.url + 'obtenerImagenCancion/' + imageFile)
.pipe(map((res) => res));
  }

  mostrarArchivoCancion(cancionFile){
    return this._http
    .get(this.url + 'obtenerArchivoCancion/' + cancionFile)
    .pipe(map((res) => res));
      }

}
