import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AgregarEventoPageRoutingModule } from './agregar-evento-routing.module';

import { AgregarEventoPage } from './agregar-evento.page';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEventoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgregarEventoPage]
})
export class AgregarEventoPageModule {}
