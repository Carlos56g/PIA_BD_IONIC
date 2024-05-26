import { Component, OnInit } from '@angular/core';
import { Recinto } from '../models/recinto';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActivatedRoute } from '@angular/router';
import { Butaca } from '../models/butaca';

@Component({
  selector: 'app-recinto',
  templateUrl: './recinto.component.html',
  styleUrls: ['./recinto.component.scss'],
})
export class RecintoComponent  implements OnInit {

  constructor(public apiService:ApiBdService, public Aroute: ActivatedRoute) { }
  RecintoActual:Recinto={
    recinto:'',
    recintoID:0,
    direccion:'',
    capacidad:0
  }
  Butacas:Butaca[]=[]
  idRecinto: number = this.Aroute.snapshot.params['id'];
  ngOnInit() {
    this.apiService.getRecinto(this.idRecinto).then(()=>{
      this.RecintoActual=this.apiService.Recinto;
      });
      this.apiService.getButacasbyRecintoID(this.idRecinto).then(()=>{
        this.Butacas=this.apiService.Butacas;
        console.log(this.Butacas)
      })

  }




}
