import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarEventoPage } from '../agregar-evento/agregar-evento.page';
import { ApiBdService } from '../servicios/api-bd.service';
import { Evento } from '../models/evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit{

  Eventos:any=[]
  EventosAgrupados:any=[];

  constructor(private modalAgregarEvento:ModalController, private apiService:ApiBdService, private http: HttpClient){}

  ngOnInit(){
    this.apiService.mostrarEventos().then(() => {
      this.Eventos = this.apiService.EventosM;
      this.agruparEventos();
    });

  }

  agruparEventos(){
    const numElementos = 4;
    for(let i=0; i <this.Eventos.length; i+=numElementos){
      this.EventosAgrupados.push(this.Eventos.slice(i,i+numElementos));
    }
  }

  async mostrarAgregarEvento(){
    const modal = await this.modalAgregarEvento.create({
      component: AgregarEventoPage,
    });
    return await modal.present();
  }

  nada(){

  }

}