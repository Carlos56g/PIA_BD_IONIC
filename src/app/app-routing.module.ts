import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EventoModificadoComponent } from './evento-modificado/evento-modificado.component';
import { EventoComponent } from './evento/evento.component';
import { DependenciaModificadaComponent } from './dependencia-modificada/dependencia-modificada.component';
import { RecintoModificadoComponent } from './recinto-modificado/recinto-modificado.component';
import { RecintoComponent } from './recinto/recinto.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'eventos',
    pathMatch: 'full'
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'agregar-evento',
    loadChildren: () => import('./agregar-evento/agregar-evento.module').then( m => m.AgregarEventoPageModule)
  },
  {
    path: 'modificar-evento',
    loadChildren: () => import('./modificar-evento/modificar-evento.module').then( m => m.ModificarEventoPageModule)
  },
  {
    path: 'modificar-evento/:id',
    component: EventoModificadoComponent 
   },
   {
    path: 'evento/:id',
    component: EventoComponent 
   },
  {
    path: 'eliminar-evento',
    loadChildren: () => import('./eliminar-evento/eliminar-evento.module').then( m => m.EliminarEventoPageModule)
  },
  {
    path: 'dependencias',
    loadChildren: () => import('./dependencias/dependencias.module').then( m => m.DependenciasPageModule)
  },
  {
    path: 'eliminar-dependencia',
    loadChildren: () => import('./eliminar-dependencia/eliminar-dependencia.module').then( m => m.EliminarDependenciaPageModule)
  },
  {
    path: 'agregar-dependencia',
    loadChildren: () => import('./agregar-dependencia/agregar-dependencia.module').then( m => m.AgregarDependenciaPageModule)
  },
  {
    path: 'modificar-dependencia',
    loadChildren: () => import('./modificar-dependencia/modificar-dependencia.module').then( m => m.ModificarDependenciaPageModule)
  },
  {
    path:'modificar-dependencia/:id',
    component:DependenciaModificadaComponent
  },
  {
    path: 'recintos',
    loadChildren: () => import('./recintos/recintos.module').then( m => m.RecintosPageModule)
  },
  {
    path: 'eliminar-recinto',
    loadChildren: () => import('./eliminar-recinto/eliminar-recinto.module').then( m => m.EliminarRecintoPageModule)
  },
  {
    path: 'modificar-recinto',
    loadChildren: () => import('./modificar-recinto/modificar-recinto.module').then( m => m.ModificarRecintoPageModule)
  },
  {
    path:'modificar-recinto/:id',
    component:RecintoModificadoComponent
  },
  {
    path: 'agregar-recinto',
    loadChildren: () => import('./agregar-recinto/agregar-recinto.module').then( m => m.AgregarRecintoPageModule)
  },
  {
    path:'recintos/:id',
    component:RecintoComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'eliminar-usuario',
    loadChildren: () => import('./eliminar-usuario/eliminar-usuario.module').then( m => m.EliminarUsuarioPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
