import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventosPageRoutingModule } from './eventos-routing.module';
import { EventosPage } from './eventos.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EventosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EventosPage]
})
export class EventosPageModule {}
