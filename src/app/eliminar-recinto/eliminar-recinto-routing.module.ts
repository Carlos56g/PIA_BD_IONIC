import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarRecintoPage } from './eliminar-recinto.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarRecintoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarRecintoPageRoutingModule {}
