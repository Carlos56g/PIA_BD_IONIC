import { Component, OnInit } from '@angular/core';
import { Recinto } from '../models/recinto';
import { ApiBdService } from '../servicios/api-bd.service';

@Component({
  selector: 'app-recintos',
  templateUrl: './recintos.page.html',
  styleUrls: ['./recintos.page.scss'],
})
export class RecintosPage implements OnInit {

  Recintos: Recinto[] = [];
  constructor(public apiService:ApiBdService) { }

  ngOnInit() {
    this.apiService.getRecintos().then(() => {
      this.Recintos = this.apiService.Recintos;
    });
  }

}
