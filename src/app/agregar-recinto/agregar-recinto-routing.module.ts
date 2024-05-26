import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRecintoPage } from './agregar-recinto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecintoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRecintoPageRoutingModule {}
