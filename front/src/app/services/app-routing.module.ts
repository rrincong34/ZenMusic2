import { Routes, RoutesModule} from '@angular/router';
import { NgModule} from '@angular/core';


import { RegistroComponent} from './components/registro/registro.component';
import { LoginComponent} from './components/login/login.component';
import { PerfilUsuarioComponent} from './components/perfil-usuario/perfil-usuario.component';


const routes: Routes = [

{path: '', component:RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'perfil', component: PerfilUsuarioComponent},

];


@NgModule({

imports: [RoutesModule.forRoot(routes)],
exports: [RoutesModule]

})

export class AppRoutingModule{}