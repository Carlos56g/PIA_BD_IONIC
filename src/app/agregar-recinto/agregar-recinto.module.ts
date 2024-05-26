import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecintoPageRoutingModule } from './agregar-recinto-routing.module';

import { AgregarRecintoPage } from './agregar-recinto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRecintoPageRoutingModule
  ],
  declarations: [AgregarRecintoPage]
})
export class AgregarRecintoPageModule {}
