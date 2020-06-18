import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../modelo/cancion';
import { CancionService } from '../../services/cancion.service';


@Component({
  selector: 'app-cancion-todas',
  templateUrl: './cancion-todas.component.html',
  styleUrls: ['./cancion-todas.component.css']
})
export class CancionTodasComponent implements OnInit {

  //Declaracion de variables cancion y canciones

  public canciones: any=[];

  constructor(
    private cancionService : CancionService,
  ) { }

ngOnInit(): void {
   this.cancionService.mostrarCanciones().subscribe(
     (response : any)=>{
       if(response.canciones){
        this.canciones = response.canciones
        console.log(`lista de canciones: ${JSON.stringify(this.canciones)}`)
       }else{
console.log('no hay canciones')
       }
     }, error =>{
      if(error != null){
        console.log(`Error: ${error}`);
      } 
    }
    );
}



  reproducir(){
    const audio = new Audio();
    new Audio('assets/Al Oído, The best of Monica Giraldo - La vida puede ser simple.mp3');
    new Audio('assets/Anzar-Tusho Medina.mp3');

    audio.play();
  }

  imagen1 = [ 'assets/img/logo-solo.png'];
  aguabajo_img = [ 'assets/ImgCanciones/Segun_la_CNN-Chirimoya.jpg'];
  alOido_img = [ 'assets/ImgCanciones/oi.jpg'];
  anzar_img = [ 'assets/ImgCanciones/anzar-Tusho.jpg'];
  bajoTierra_img = [ 'assets/ImgCanciones/tierra.jpg'];
  caballito_img = [ 'assets/ImgCanciones/Caballito_de_raquira-niyireth.jpg'];
  cancionAgradecimiento_img = [ 'assets/ImgCanciones/Cancion_de_Agradecimiento-Silbidos.jpg'];
  dejateLlevar_img = [ 'assets/ImgCanciones/Dejate_llevar-Art_Bembe.jpg'];
  feliz_img = [ 'assets/ImgCanciones/Dejate_llevar-Art_Bembe.jpg'];
  paQueTrabajar_img = [ 'assets/ImgCanciones/la.jpg'];
  chocolate_img = [ 'assets/ImgCanciones/cho.jpg'];
  remanso_img = [ 'assets/ImgCanciones/chonta.jpg'];
  solo_img = [ 'assets/ImgCanciones/Solo-Ekhymosis.jpg'];
  tuBoca_img = [ 'assets/ImgCanciones/cab.jpg'];
  teInvito_img = [ 'assets/ImgCanciones/te.jpg'];


cancion = {
  aguabajo_Nombre: 'SEGUN LA CNN',
  alOido_Nombre: 'AL OIDO',
  anzar_Nombre: 'ANZAR',
  bajoTierra_Nombre: 'BAJO TIERRA',
  caballito_Nombre: 'CABALLITO DE RAQUIRA',
  cancionAgradecimiento_Nombre: 'CANCION DE AGRADECIMIENTO',
  dejateLlevar_Nombre: 'DEJATE LLEVAR',
  feliz_Nombre: 'SE FELIZ',
  paQueTrabajar_Nombre: 'PA QUE TRABAJAR',
  chocolate_Nombre: 'CHOCOLATE',
  remanso_Nombre: 'REMANSO INICIAL - PURA CHONTA',
  solo_Nombre: 'SOLO',
  tuBoca_Nombre: 'TU BOCA',
  teInvito_Nombre: 'TE INVITO'
}


album = {
  aguabajo_album: 'Chirimoya',
  alOido_album: 'Al Oído The best of Mónica Giraldo',
  anzar_album: 'Anzar',
  bajoTierra_album: 'Lavandería real',
  caballito_album: 'Music from Colombia',
  cancionAgradecimiento_album: 'Silbidos',
  dejateLlevar_album: 'Art Bembé',
  feliz_album: 'Art Bembé',
  paQueTrabajar_album: 'Buenaventura',
  chocolate_album: 'Baila',
  remanso_album: 'Pura chonta',
  solo_album: 'Niño gigante',
  tuBoca_album: 'Cabas',
  teInvito_album: 'Tambó'
}


emocion = {
  emocion1: 'Amor',
  emocion2: 'Alegria',
  emocion3: 'Tranquilidad',
  emocion4: 'Pasion',
  emocion5: 'Gratitud'
}


genero = {
  genero1: 'Folclorico',
  genero2: 'Música colombiana',
  genero3: 'Romantica',
  genero4: 'Alternativa/independiente',
  genero5: 'Pop',
  genero6: 'música colombiana/reggae/hip hop',
  genero7: 'Folclor',
  genero8: 'Rock en español',
  genero9: 'Salsa/música tropical'
}

artista = {
  aguabajo_artista: 'Aguabajo',
  alOido_artista: 'Mónica Giraldo',
  anzar_artista: 'Tusho Medina',
  bajoTierra_artista: 'Bajo Tierra',
  caballito_artista: 'Niyireth Alarcon',
  cancionAgradecimiento_artista: 'Las Añez',
  dejateLlevar_artista: 'Gema y Pável',
  feliz_artista: 'Gema y Pável',
  paQueTrabajar_artista: 'La Santa Cecilia',
  chocolate_artista: 'Profetas',
  remanso_artista: 'Grupo Bahia',
  solo_artista: 'Ekhymosis',
  tuBoca_artista: 'Andrés Cabas',
  teInvito_artista: 'Herencia de Timbiquí'
}


anio = {
  anio1993: '1993',
  anio1996: '1996',
  anio1997: '1997',
  anio2002: '2002',
  anio2011: '2011',
  anio2013: '2013',
  anio2014: '2014',
  anio2015: '2015',
  anio2016: '2016',
  anio2019: '2019'
}


}
