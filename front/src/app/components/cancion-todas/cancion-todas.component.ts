import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancion-todas',
  templateUrl: './cancion-todas.component.html',
  styleUrls: ['./cancion-todas.component.css']
})
export class CancionTodasComponent implements OnInit {
  aguabajo_img = [ 'assets/ImgCanciones/Segun_la_CNN-Chirimoya.jpg'];
  alOido_img = [ 'assets/ImgCanciones/monica.jpg'];
  anzar_img = [ 'assets/ImgCanciones/anzar-Tusho.jpg'];
  bajoTierra_img = [ 'assets/ImgCanciones/tierra.jpg'];
  caballito_img = [ 'assets/ImgCanciones/Caballito_de_raquira-niyireth.jpg'];
  cancionAgradecimiento_img = [ 'assets/ImgCanciones/Cancion_de_Agradecimiento-Silbidos.jpg'];
  dejateLlevar_img = [ 'assets/ImgCanciones/Dejate_llevar-Art_Bembe.jpg'];
  feliz_img = [ 'assets/ImgCanciones/Dejate_llevar-Art_Bembe.jpg'];
  paQueTrabajar_img = [ 'assets/ImgCanciones/cecilia.jpg'];
  chocolate_img = [ 'assets/ImgCanciones/profetas.jpg'];
  remanso_img = [ 'assets/ImgCanciones/chonta.jpg'];
  solo_img = [ 'assets/ImgCanciones/Solo-Ekhymosis.jpg'];
  tuBoca_img = [ 'assets/ImgCanciones/Tu_boca-Cabas.jpg'];
  teInvito_img = [ 'assets/ImgCanciones/herencia.jpg'];


cancion = {
  aguabajo_Nombre: 'SEGUN LA CNN',
  alOido_Nombre: 'AL OIDO',
  anzar_Nombre: 'ANZAR',
  bajoTierra_Nombre: 'SUPER HOLGAZAN',
  caballito_Nombre: 'SUPER HSEQ',
  cancionAgradecimiento_Nombre: 'SUPER HSEQ',
  dejateLlevar_Nombre: 'SUPER HOLGAZAN',
  feliz_Nombre: 'SUPER HSEQ',
  paQueTrabajar_Nombre: 'SUPER HOLGAZAN',
  chocolate_Nombre: 'SUPER HSEQ',
  remanso_Nombre: 'SUPER HOLGAZAN',
  solo_Nombre: 'SUPER HOLGAZAN',
  tuBoca_Nombre: 'SUPER HSEQ',
  teInvito_Nombre: 'SUPER HOLGAZAN'
}


album = {
  aguabajo_album: 'Chirimoya',
  alOido_album: 'Al Oído The best of Mónica Giraldo',
  anzar_album: '',
  bajoTierra_album: 'SUPER HOLGAZAN',
  caballito_album: 'SUPER HSEQ',
  cancionAgradecimiento_album: 'SUPER HSEQ',
  dejateLlevar_album: 'SUPER HOLGAZAN',
  feliz_album: 'SUPER HSEQ',
  paQueTrabajar_album: 'SUPER HOLGAZAN',
  chocolate_album: 'SUPER HSEQ',
  remanso_album: 'SUPER HOLGAZAN',
  solo_album: 'SUPER HOLGAZAN',
  tuBoca_album: 'SUPER HSEQ',
  teInvito_album: 'SUPER HOLGAZAN'
}


emocion = {
  emocion1: '',
  emocion2: '',
  emocion3: '',
  emocion4: '',
  emocion5: ''
}


genero = {
  genero1: 'Folclorico',
  genero2: 'Música colombiana',
  genero3: '',
  genero4: '',
  genero5: '',
  genero6: '',
  genero7: ''
}

artista = {
  aguabajo_artista: 'Aguabajo',
  alOido_artista: 'Mónica Giraldo',
  anzar_artista: 'Tusho Medina',
  bajoTierra_artista: 'SUPER HOLGAZAN',
  caballito_artista: 'SUPER HSEQ',
  cancionAgradecimiento_artista: 'SUPER HSEQ',
  dejateLlevar_artista: 'SUPER HOLGAZAN',
  feliz_artista: 'SUPER HSEQ',
  paQueTrabajar_artista: 'SUPER HOLGAZAN',
  chocolate_artista: 'SUPER HSEQ',
  remanso_artista: 'SUPER HOLGAZAN',
  solo_artista: 'SUPER HOLGAZAN',
  tuBoca_artista: 'SUPER HSEQ',
  teInvito_artista: 'SUPER HOLGAZAN'
}


año = {
  genero1: '2014',
  genero2: '2019',
  genero3: '2013',
  genero4: '',
  genero5: ''
}

constructor() { }

ngOnInit(): void {
}
}
