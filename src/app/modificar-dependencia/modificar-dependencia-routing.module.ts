import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarDependenciaPage } from './modificar-dependencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarDependenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarDependenciaPageRoutingModule {}
