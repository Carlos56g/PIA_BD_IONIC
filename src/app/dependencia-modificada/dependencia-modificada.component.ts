import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dependencia } from '../models/dependencia';

@Component({
  selector: 'app-dependencia-modificada',
  templateUrl: './dependencia-modificada.component.html',
  styleUrls: ['./dependencia-modificada.component.scss'],
})
export class DependenciaModificadaComponent  implements OnInit {
  
  DependenciaActual:Dependencia={
    dependencia:'',
    dependenciaID:0
  }

  constructor(public apiService:ApiBdService, public Aroute: ActivatedRoute,public route:Router) { }
  idDependencia: number = this.Aroute.snapshot.params['id'];
  ngOnInit() {
    this.apiService.getDependencia(this.idDependencia).then(()=>{
      this.DependenciaActual=this.apiService.Dependencia;
      });
  }

  modificarDependencia(){
    this.apiService.putDependencia(this.DependenciaActual)
    this.route.navigate(['dependencias'])
  }
}
