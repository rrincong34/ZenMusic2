import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Importar los componentes de navegación

import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { CrearPlayListComponent } from './components/crear-play-list/crear-play-list.component';
import { MenuNoRegistradosComponent } from './components/menu-no-registrados/menu-no-registrados.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroCancionComponent } from './components/registro-cancion/registro-cancion.component';


// Relacionar rutas con componentes
const routes: Routes = [
    {path: 'registro', component: RegistroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil', component: PerfilUsuarioComponent},
    {path: 'crear-play-list', component: CrearPlayListComponent},
    {path: 'menu-no-registrados', component: MenuNoRegistradosComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'registro-cancion', component: RegistroCancionComponent },
    {path: '', component: HomeComponent}


    

];

// Importamos en la raíz de RouterModule el array de rutas y luego exportamos el nuevo Módulo
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

// Exportar el módulo
export class AppRoutingModule {}