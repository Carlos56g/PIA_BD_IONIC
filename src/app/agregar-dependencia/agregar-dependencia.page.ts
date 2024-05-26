import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { Dependencia } from '../models/dependencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-dependencia',
  templateUrl: './agregar-dependencia.page.html',
  styleUrls: ['./agregar-dependencia.page.scss'],
})
export class AgregarDependenciaPage implements OnInit {

  constructor(public apiService:ApiBdService, public route:Router) { }
  newDependencia:Dependencia={
    dependencia:'',
    dependenciaID:0
  }
  ngOnInit() {
  }


  agregarDependencia(){
    this.apiService.postDependecia(this.newDependencia)
    this.route.navigate(['dependencias'])
  }

  



}
