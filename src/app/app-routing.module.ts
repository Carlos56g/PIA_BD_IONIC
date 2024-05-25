import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EventoModificadoComponent } from './evento-modificado/evento-modificado.component';
import { EventoComponent } from './evento/evento.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
