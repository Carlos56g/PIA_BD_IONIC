import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarRecintoPageRoutingModule } from './modificar-recinto-routing.module';

import { ModificarRecintoPage } from './modificar-recinto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarRecintoPageRoutingModule
  ],
  declarations: [ModificarRecintoPage]
})
export class ModificarRecintoPageModule {}
