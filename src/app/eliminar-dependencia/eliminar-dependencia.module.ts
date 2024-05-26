import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarDependenciaPageRoutingModule } from './eliminar-dependencia-routing.module';

import { EliminarDependenciaPage } from './eliminar-dependencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarDependenciaPageRoutingModule
  ],
  declarations: [EliminarDependenciaPage]
})
export class EliminarDependenciaPageModule {}
