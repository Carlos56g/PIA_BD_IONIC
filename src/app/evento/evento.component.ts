import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBdService } from '../servicios/api-bd.service';
import { Evento } from '../models/evento';
import { Recinto } from '../models/recinto';
import { Dependencia } from '../models/dependencia';
import { Categoria } from '../models/categoria';
import { Costo } from '../models/costo';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss'],
})
export class EventoComponent  implements OnInit {

  constructor(public Aruta : ActivatedRoute, public apiService:ApiBdService) { }

  idEvento: number = this.Aruta.snapshot.params['id'];

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

  ngOnInit() {
    console.log("Evento",this.idEvento)
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

}
