import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecintosPageRoutingModule } from './recintos-routing.module';

import { RecintosPage } from './recintos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecintosPageRoutingModule
  ],
  declarations: [RecintosPage]
})
export class RecintosPageModule {}
