import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from 'src/app/models/evento';
import { Recinto } from 'src/app/models/recinto';
import { Categoria } from 'src/app/models/categoria';
import { Dependencia } from 'src/app/models/dependencia';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiBdService {

  APIURL: string = "http://localhost:5000/"

  Eventos: Evento[] = []
  Recintos: Recinto[] = []
  Categorias: Categoria[] = []
  Dependencias: Dependencia[] = []

  EventosM: any

  constructor(private http: HttpClient) { }


  getRecintos(): Promise<void> {
    return firstValueFrom(this.http.get<Recinto[]>(`${this.APIURL}recintos`))
      .then((res) => {
        this.Recintos = res;
      })
      .catch((error) => {
        console.error('Error fetching Recintos:', error);
        throw error;
      });
  }

  
  getDependencias(): Promise<void> {
    return firstValueFrom(this.http.get<Dependencia[]>(`${this.APIURL}dependencias`))
      .then((res) => {
        this.Dependencias = res;
      })
      .catch((error) => {
        console.error('Error fetching Dependencias:', error);
        throw error;
      });
  }


  getCategorias(): Promise<void> {
    return firstValueFrom(this.http.get<Categoria[]>(`${this.APIURL}categorias`))
      .then((res) => {
        this.Categorias = res;
      })
      .catch((error) => {
        console.error('Error fetching Categorias:', error);
        throw error;
      });
  }


  getEventos(): Promise<void> {
    return firstValueFrom(this.http.get<Evento[]>(`${this.APIURL}eventos`))
      .then((res) => {
        this.Eventos = res;
      })
      .catch((error) => {
        console.error('Error fetching Eventos:', error);
        throw error;
      });
  }


  mostrarEventos(): Promise<void> {
    return firstValueFrom(this.http.get<any>(`${this.APIURL}eventos/mostrarEventos()`))
      .then((res) => {
        this.EventosM = res;
      })
      .catch((error) => {
        console.error('Error fetching EventosM:', error);
        throw error;
      });
  }


  postEvento(newEvento:Evento){
    this.http.post(this.APIURL+"eventos",newEvento).subscribe((res) => {
      alert(res)
    })

    //DELETE EVENTO

    //ELI

  }

}
