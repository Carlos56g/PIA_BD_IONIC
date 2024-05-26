import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarRecintoPage } from './modificar-recinto.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarRecintoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarRecintoPageRoutingModule {}
