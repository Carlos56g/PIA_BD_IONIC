import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBdService } from '../servicios/api-bd.service';
import { Recinto } from '../models/recinto';

@Component({
  selector: 'app-recinto-modificado',
  templateUrl: './recinto-modificado.component.html',
  styleUrls: ['./recinto-modificado.component.scss'],
})
export class RecintoModificadoComponent  implements OnInit {

  constructor(public apiService:ApiBdService, public Aroute: ActivatedRoute,public route:Router) { }
  
  idRecinto: number = this.Aroute.snapshot.params['id'];

  RecintoActual:Recinto={
    recinto:'',
    recintoID:0,
    direccion:'',
    capacidad:0
  }

  ngOnInit() {
    this.apiService.getRecinto(this.idRecinto).then(()=>{
      this.RecintoActual=this.apiService.Recinto;
      });
    
  }

  modificarDependencia(){
    this.apiService.putRecinto(this.RecintoActual)
    this.route.navigate(['recintos'])
  }

  formValido():boolean{
    if(this.RecintoActual.capacidad<=0||this.RecintoActual.recinto==''||this.RecintoActual.direccion==''){
      return true
    }
    else{
      return false
    }
  }

}
