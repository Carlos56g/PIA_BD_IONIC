import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarDependenciaPageRoutingModule } from './agregar-dependencia-routing.module';

import { AgregarDependenciaPage } from './agregar-dependencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarDependenciaPageRoutingModule
  ],
  declarations: [AgregarDependenciaPage]
})
export class AgregarDependenciaPageModule {}
