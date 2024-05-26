import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependenciasPageRoutingModule } from './dependencias-routing.module';

import { DependenciasPage } from './dependencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependenciasPageRoutingModule
  ],
  declarations: [DependenciasPage]
})
export class DependenciasPageModule {}
