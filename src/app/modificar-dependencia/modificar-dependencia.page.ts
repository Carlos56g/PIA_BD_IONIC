import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { Dependencia } from '../models/dependencia';

@Component({
  selector: 'app-modificar-dependencia',
  templateUrl: './modificar-dependencia.page.html',
  styleUrls: ['./modificar-dependencia.page.scss'],
})
export class ModificarDependenciaPage implements OnInit {

  constructor(public apiService:ApiBdService) { }
  Dependencias: Dependencia[] = [];
  ngOnInit() {
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
    });
  }

}
