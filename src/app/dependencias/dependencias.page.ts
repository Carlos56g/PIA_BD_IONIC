import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { Dependencia } from '../models/dependencia';

@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.page.html',
  styleUrls: ['./dependencias.page.scss'],
})
export class DependenciasPage implements OnInit {

  Dependencias: Dependencia[] = [];

  constructor(public apiService:ApiBdService) { }

  ngOnInit() {
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
    });

  }

}
