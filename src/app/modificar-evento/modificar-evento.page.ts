import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.page.html',
  styleUrls: ['./modificar-evento.page.scss'],
})
export class ModificarEventoPage implements OnInit {

  EventosM:any[]=[];

  constructor(public apiService:ApiBdService) { }

  ngOnInit() {
    this.apiService.mostrarEventos().then(()=>{
      this.EventosM=this.apiService.EventosM
      console.log(this.EventosM)
    })
    
  }




}
