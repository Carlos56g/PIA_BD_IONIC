import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from 'src/app/models/evento';
import { Recinto } from 'src/app/models/recinto';
import { Categoria } from 'src/app/models/categoria';
import { Dependencia } from 'src/app/models/dependencia';
import { firstValueFrom } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Costo } from '../models/costo';

@Injectable({
  providedIn: 'root'
})

export class ApiBdService {

  APIURL: string = "http://localhost:5000/"

  Evento:Evento={
    eventoID:0,
    titulo:'',
    descripcion: '',
    fecha:  new Date(),
    recintoID: 0,
    dependenciaID: 0,
    categoriaID: 0
  };

  Eventos: Evento[] = []
  Recintos: Recinto[] = []
  Dependencia:Dependencia={
    dependencia:'',
    dependenciaID:0
  }

  Recinto:Recinto={
    recinto:'',
    recintoID:0,
    direccion:'',
    capacidad:0
  }

  
  Categorias: Categoria[] = []
  Dependencias: Dependencia[] = []
  Costos: Costo[] = []

  EventosM: any

  constructor(private http: HttpClient, public platform:Platform ) { }


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

  getEvento(ID: number): Promise<void> {
    return firstValueFrom(this.http.get<Evento>(`${this.APIURL}eventos/${ID}`))
      .then((res) => {
        this.Evento = res;
      })
      .catch((error) => {
        console.error('Error fetching Evento:', error);
        throw error;
      });
  }

  getDependencia(ID: number): Promise<void> {
    return firstValueFrom(this.http.get<Dependencia>(`${this.APIURL}dependencias/${ID}`))
      .then((res) => {
        this.Dependencia = res;
      })
      .catch((error) => {
        console.error('Error fetching Dependencia:', error);
        throw error;
      });
  }


  getCostobyEventoID(ID: number): Promise<void> {
    return firstValueFrom(this.http.get<Costo[]>(`${this.APIURL}costos/${ID}`))
      .then((res) => {
        this.Costos = res;
        console.log(this.Costos)
      })
      .catch((error) => {
        console.error('Error fetching Costos:', error);
        throw error;
      });
  }

  getRecinto(ID: number): Promise<void> {
    return firstValueFrom(this.http.get<Recinto>(`${this.APIURL}recintos/${ID}`))
      .then((res) => {
        this.Recinto = res;
      })
      .catch((error) => {
        console.error('Error fetching Recintos:', error);
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


  async postEvento(newEvento: Evento) {
    this.http.post(this.APIURL + "eventos", newEvento).subscribe((res) => {
      alert(res)
      this.mostrarEventos();
    })
  }

  async postCosto(newCosto: Costo) {
    this.http.post(this.APIURL + "costos", newCosto).subscribe((res) => {
      alert(res)
    })
  }

  postDependecia(newDependencia: Dependencia) {
    this.http.post(this.APIURL + "dependencias", newDependencia).subscribe((res) => {
      alert(res)
    })
  }

  postRecinto(newRecinto: Recinto) {
    this.http.post(this.APIURL + "recintos", newRecinto).subscribe((res) => {
      alert(res)
    })
  }

  deleteEvento(ID: number) {
    this.http.delete(this.APIURL + "eventos/" + ID).subscribe((res) => {
      alert(res)
      this.getEventos();
      this.mostrarEventos();
    })
  }

  async deleteCosto(ID: number) {
    this.http.delete(this.APIURL + "costos/" + ID).subscribe((res) => {
      alert(res)
    })
  }

  async deleteDependencia(ID: number) {
    this.http.delete(this.APIURL + "dependencias/" + ID).subscribe((res) => {
      alert(res)
    })
  }

  async deleteRecinto(ID: number) {
    this.http.delete(this.APIURL + "recintos/" + ID).subscribe((res) => {
      alert(res)
    })
  }

  putEvento(newEvento:Evento){
    this.http.put(this.APIURL+"eventos",newEvento).subscribe((res)=>{
      alert(res)
      this.getEventos();
      this.mostrarEventos();
    })
  }

  putRecinto(newRecinto:Recinto){
    this.http.put(this.APIURL+"recintos",newRecinto).subscribe((res)=>{
      alert(res)
      this.getEventos();
      this.mostrarEventos();
    })
  }

  putCosto(newCosto: Costo) {
    this.http.put(this.APIURL + "costos", newCosto).subscribe((res) => {
      alert(res)
      this.getEventos();
      this.mostrarEventos();
    })
  }

  putDependencia(newCosto: Dependencia) {
    this.http.put(this.APIURL + "dependencias", newCosto).subscribe((res) => {
      alert(res)
      this.getEventos();
      this.mostrarEventos();
    })
  }

  restartApp() {
    // Verifica si la aplicación se está ejecutando en un dispositivo móvil
    if (this.platform.is('cordova')) {
      // Si está en un dispositivo móvil, utiliza el plugin de Ionic para reiniciar la aplicación
      this.platform.ready().then(() => {
        window.location.reload();
      });
    } else {
      // Si no está en un dispositivo móvil, simplemente recarga la página
      window.location.reload();
    }
  }



}
