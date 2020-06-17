import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importar módulo de rutas
import { AppRoutingModule } from './app-routing.module';
// Importar Módulo Formularios
import { FormsModule } from '@angular/forms';
// Importar el módulo HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { MenuComponent } from './components/menu/menu.component';

// Importar Servicio Usuario
import { UsuarioService } from './services/usuario.service';
import { FooterComponent } from './components/footer/footer.component';
import { CrearPlayListComponent } from './components/crear-play-list/crear-play-list.component';
import { MenuNoRegistradosComponent } from './components/menu-no-registrados/menu-no-registrados.component';
import { HomeComponent } from './components/home/home.component';
import { VistaReproduccionComponent } from './components/vista-reproduccion/vista-reproduccion.component';
import { CancionTodasComponent } from './components/cancion-todas/cancion-todas.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    MenuComponent,
    FooterComponent,
    CrearPlayListComponent,
    MenuNoRegistradosComponent,
    HomeComponent,
    VistaReproduccionComponent,
    CancionTodasComponent,
    CancionComponent,
    CancionTodasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
