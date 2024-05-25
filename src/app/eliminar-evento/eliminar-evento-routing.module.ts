import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarEventoPage } from './eliminar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarEventoPageRoutingModule {}
