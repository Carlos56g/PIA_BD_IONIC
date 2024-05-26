import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Dependencia } from '../models/dependencia';
import { Rol } from '../models/rol';
import { ApiBdService } from '../servicios/api-bd.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  UsuariosM: any;
  Dependencias:Dependencia[]=[]
  Roles:Rol[]=[]

  constructor(public apiService:ApiBdService) { }

  ngOnInit() {
    this.apiService.mostrarUsuarios().then(()=>{
      this.UsuariosM=this.apiService.UsuariosM
    });
  }




}
