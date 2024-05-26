import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Evento } from '../models/evento';
import { Router } from '@angular/router';
import { ApiBdService } from '../servicios/api-bd.service';
import { Categoria } from '../models/categoria';
import { Dependencia } from '../models/dependencia';
import { Recinto } from '../models/recinto';
import { Costo } from '../models/costo';
import { FormBuilder} from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.page.html',
  styleUrls: ['./agregar-evento.page.scss'],
})
export class AgregarEventoPage implements OnInit {


  Categorias: Categoria[] = [];
  CategoriaSe: Categoria = {
    categoriaID: 0,
    categoria: ''
  };
  showCategorias: boolean = false

  Dependencias: Dependencia[] = [];
  DependenciaSe: Dependencia = {
    dependenciaID: 0,
    dependencia: ''
  };
  showDependencias: boolean = false

  Recintos: Recinto[] = [];
  RecintoSe: Recinto = {
    recintoID: 0,
    recinto: '',
    direccion: '',
    capacidad: 0
  };
  showRecintos: boolean = false

  newEvento: Evento = {
    eventoID: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    recintoID: 0,
    dependenciaID: 0,
    categoriaID: 0
  };

  Eventos: Evento[] = []

  newCosto: Costo = {
    costoID: 0,
    costo: 0,
    descripcion: 'Sin Costo',
    eventoID: 0
  };

  categoriaA:boolean=false;
  dependenciaA:boolean=false;
  recintoA:boolean=false;
  datetimeA:boolean=false;
  Costos: Costo[] = []


  dateFromDatetime = format(new Date(), 'yyyy-MM-dd') + 'T00:00:00-00:00';
  minDate = format(new Date(), 'yyyy-MM-dd') + 'T00:00:00-00:00';
  //costoForm: FormGroup;
  IDmax = 0
  constructor(private modal: ModalController, private http: HttpClient, private route: Router, public apiService: ApiBdService, public fb: FormBuilder) {

  }

  ngOnInit() {
    this.apiService.getCategorias().then(() => {
      this.Categorias = this.apiService.Categorias;
      this.CategoriaSe = this.Categorias[0];
    });
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
      this.DependenciaSe = this.Dependencias[0];
    });
    this.apiService.getRecintos().then(() => {
      this.Recintos = this.apiService.Recintos;
      this.RecintoSe = this.Recintos[0];
    });
    this.apiService.getEventos().then(() => {
      this.Eventos = this.apiService.Eventos;
      const length = this.Eventos.length
      this.IDmax = this.Eventos[length - 1].eventoID + 1
    });
  }


  closemodal() {
    //agregar a la bd
    this.modal.dismiss();
  }

  onIonChangeC(event: CustomEvent) {
    this.CategoriaSe = event.detail.value;
  }

  onIonChangeD(event: CustomEvent) {
    this.DependenciaSe = event.detail.value;
  }

  onIonChangeR(event: CustomEvent) {
    this.RecintoSe = event.detail.value;
  }

  onDidDismiss(event: CustomEvent) {
    console.log('didDismiss', JSON.stringify(event.detail));
  }

  mostrarCategorias() {
    this.showCategorias = !this.showCategorias;
    this.showDependencias = false;
    this.showRecintos = false;
    this.categoriaA=true;
  }

  mostrarDependencias() {
    this.showDependencias = !this.showDependencias;
    this.showCategorias = false;
    this.showRecintos = false;
    this.dependenciaA=true;
  }

  mostrarRecintos() {
    this.showRecintos = !this.showRecintos;
    this.showCategorias = false;
    this.showDependencias = false;
    this.recintoA=true;
  }

  ChangeDateInput(value: any) {
    this.dateFromDatetime = value
    this.datetimeA=true
  }

  async AgregarEvento() {
    this.newEvento.categoriaID = this.CategoriaSe.categoriaID;
    this.newEvento.recintoID = this.RecintoSe.recintoID;
    this.newEvento.dependenciaID = this.DependenciaSe.dependenciaID;
    this.newEvento.fecha = new Date(this.dateFromDatetime)
    this.newEvento.eventoID = this.IDmax
    this.apiService.postEvento(this.newEvento)
    setTimeout(() => {
      this.agregarCostoBD();
      this.route.navigate(['eventos']);
    }, 500);
  
    
  }

  agregarCosto() {
    this.newCosto.eventoID = this.IDmax
    this.Costos.push({ ...this.newCosto });
    this.newCosto = {
      costoID: 0,
      costo: 0,
      descripcion: '',
      eventoID:0
    };
  }

  async agregarCostoBD() {
    const n = this.Costos.length
    for (let i = 0; i < n; i++) {
      await this.apiService.postCosto(this.Costos[i])
    }
  }

  formValido():boolean{
    if(this.Costos.length==0||this.newEvento.descripcion==null||this.newEvento.titulo==null||this.categoriaA==false||this.recintoA==false||this.dependenciaA==false){
      return true;
    }
    else{
      return false;
    }
  }

}

