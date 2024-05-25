import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { EventoModificadoComponent } from './evento-modificado/evento-modificado.component';
import { FormsModule } from '@angular/forms';
import { EventoComponent } from './evento/evento.component';
@NgModule({
  declarations: [AppComponent,MenuLateralComponent,EventoModificadoComponent,EventoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
