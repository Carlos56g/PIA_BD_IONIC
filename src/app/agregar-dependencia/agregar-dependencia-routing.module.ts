import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarDependenciaPage } from './agregar-dependencia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarDependenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarDependenciaPageRoutingModule {}
