import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarDependenciaPageRoutingModule } from './modificar-dependencia-routing.module';

import { ModificarDependenciaPage } from './modificar-dependencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarDependenciaPageRoutingModule
  ],
  declarations: [ModificarDependenciaPage]
})
export class ModificarDependenciaPageModule {}
