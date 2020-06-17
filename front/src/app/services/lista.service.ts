import { Injectable } from '@angular/core';

// Importar los módulos HttpClient y HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Importar el map
import { map } from 'rxjs/operators';

// Importar Observable
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  // Declarar la variable url de la api
  url = 'http://localhost:3000/api/';

  constructor(private _http: HttpClient) {}

  //Servicio mostrrar lista de canciones
  obtenerLista(idLista) {
    return this._http
      .get(this.url + '/mostrarListaCanciones/' + idLista)
      .pipe(map((res) => res));
  }

  obtenerListasUsuario(idUsuario) {
    return this._http
      .get(this.url + '/mostrarListasUsuario/' + idUsuario)
      .pipe(map((res) => res));
  }
}
