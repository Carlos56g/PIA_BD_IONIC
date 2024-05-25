import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../models/categoria';
import { Dependencia } from '../models/dependencia';
import { Recinto } from '../models/recinto';
import { Evento } from '../models/evento';
import { Costo } from '../models/costo';

@Component({
  selector: 'app-evento-modificado',
  templateUrl: './evento-modificado.component.html',
  styleUrls: ['./evento-modificado.component.scss'],
})
export class EventoModificadoComponent  implements OnInit {

  Categorias: Categoria[] = [];
  CategoriaSe: Categoria={
    categoriaID:0,
    categoria:''
  };
  showCategorias: boolean = false

  Dependencias: Dependencia[] = [];
  DependenciaSe: Dependencia = {
    dependenciaID:0,
    dependencia:''
  };
  showDependencias: boolean = false

  Recintos: Recinto[] = [];
  RecintoSe: Recinto = {
    recintoID:0,
    recinto:'',
    direccion:'',
    capacidad:0
  };
  showRecintos: boolean = false
  idEvento: number = this.Aruta.snapshot.params['id'];

  EventoActual:Evento={
    eventoID:0,
    titulo:'',
    descripcion: '',
    fecha:  new Date(),
    recintoID: 0,
    dependenciaID: 0,
    categoriaID: 0
  }
  
  dateFromDatetime:string=(new Date()).toISOString();

  Costos: Costo[] = [];
  newCosto:Costo={
    costoID:0,
    costo:0,
    eventoID:0,
    descripcion:''
  }
  
  constructor(public Aruta : ActivatedRoute, public apiService:ApiBdService, public ruta: Router) { }
  
  ngOnInit() {
    console.log(this.idEvento)
    this.apiService.getEvento(this.idEvento).then(()=>{
      this.EventoActual=this.apiService.Evento;
      //this.EventoActual.fecha=new Date(this.EventoActual.fecha)
      //this.dateFromDatetime=this.EventoActual.fecha.toISOString().split('T')[0]+'T'+this.EventoActual.fecha.toLocaleTimeString ('it-IT');
      this.apiService.getCostobyEventoID(this.EventoActual.eventoID).then(()=>{
        this.Costos=this.apiService.Costos
      });
    });
    this.apiService.getCategorias().then(() => {
      this.Categorias = this.apiService.Categorias;
      this.CategoriaSe=this.Categorias[this.EventoActual.categoriaID-1];
    });
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
      this.DependenciaSe=this.Dependencias[this.EventoActual.dependenciaID-1];
    });
    this.apiService.getRecintos().then(() => {
      this.Recintos = this.apiService.Recintos;
      this.RecintoSe=this.Recintos[this.EventoActual.recintoID-1];
    });
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
  }

  mostrarDependencias() {
    this.showDependencias = !this.showDependencias;
    this.showCategorias = false;
    this.showRecintos = false;
  }

  mostrarRecintos() {
    this.showRecintos = !this.showRecintos;
    this.showCategorias = false;
    this.showDependencias = false;
  }

  ChangeDateInput(value: any) {
    this.dateFromDatetime = value
  }

  AgregarEvento() {
    this.EventoActual.categoriaID=this.CategoriaSe.categoriaID;
    this.EventoActual.recintoID=this.RecintoSe.recintoID;
    this.EventoActual.dependenciaID=this.DependenciaSe.dependenciaID;
    this.EventoActual.fecha=new Date(this.dateFromDatetime)
    this.apiService.putEvento(this.EventoActual)
    this.ruta.navigate(['eventos'])
  }

  EditarCosto(newCosto:Costo){
    this.apiService.putCosto(newCosto)
  }

  EliminarCosto(costoID:number){
    this.apiService.deleteCosto(costoID).then(()=>{
      this.apiService.restartApp()
    })

    
  }

    agregarCosto(){
      this.newCosto.eventoID=this.EventoActual.eventoID
      this.apiService.postCosto(this.newCosto)
      this.apiService.restartApp();
    }

  

}
