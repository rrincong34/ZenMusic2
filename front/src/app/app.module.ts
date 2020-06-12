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

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    MenuComponent
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
