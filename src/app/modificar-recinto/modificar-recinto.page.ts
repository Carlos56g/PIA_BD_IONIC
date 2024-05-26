import { Component, OnInit } from '@angular/core';
import { Recinto } from '../models/recinto';
import { ApiBdService } from '../servicios/api-bd.service';

@Component({
  selector: 'app-modificar-recinto',
  templateUrl: './modificar-recinto.page.html',
  styleUrls: ['./modificar-recinto.page.scss'],
})
export class ModificarRecintoPage implements OnInit {
  Recintos: Recinto[] = [];
  constructor(public apiService:ApiBdService) { }

  ngOnInit() {
    this.apiService.getRecintos().then(() => {
      this.Recintos = this.apiService.Recintos;
    });
  }

}
