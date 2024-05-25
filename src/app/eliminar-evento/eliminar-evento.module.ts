import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarEventoPageRoutingModule } from './eliminar-evento-routing.module';

import { EliminarEventoPage } from './eliminar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarEventoPageRoutingModule
  ],
  declarations: [EliminarEventoPage]
})
export class EliminarEventoPageModule {}
