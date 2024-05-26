import { Component, OnInit } from '@angular/core';
import { Recinto } from '../models/recinto';
import { ApiBdService } from '../servicios/api-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-recinto',
  templateUrl: './agregar-recinto.page.html',
  styleUrls: ['./agregar-recinto.page.scss'],
})
export class AgregarRecintoPage implements OnInit {
  newRecinto:Recinto={
    recinto:'',
    recintoID:0,
    direccion:'',
    capacidad:0
  }
  constructor(public apiService:ApiBdService, public route:Router) { }

  ngOnInit() {
  }

  formValido():boolean{
    if(this.newRecinto.capacidad<=0||this.newRecinto.recinto==''||this.newRecinto.direccion==''){
      return true
    }
    else{
      return false
    }
  }

  agregarRecinto(){
    this.apiService.postRecinto(this.newRecinto)
    this.route.navigate(['recintos']);
  }



}
