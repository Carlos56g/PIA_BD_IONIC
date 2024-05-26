import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarRecintoPageRoutingModule } from './eliminar-recinto-routing.module';

import { EliminarRecintoPage } from './eliminar-recinto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarRecintoPageRoutingModule
  ],
  declarations: [EliminarRecintoPage]
})
export class EliminarRecintoPageModule {}
