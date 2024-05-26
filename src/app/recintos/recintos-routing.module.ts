import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecintosPage } from './recintos.page';

const routes: Routes = [
  {
    path: '',
    component: RecintosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecintosPageRoutingModule {}
