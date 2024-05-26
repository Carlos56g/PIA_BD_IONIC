import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ApiBdService } from '../servicios/api-bd.service';
import { Usuario } from '../models/usuario';
import { Dependencia } from '../models/dependencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  regForm: FormGroup;
  showDependencias: boolean = false
  constructor(public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public apiService: ApiBdService, public route:Router) { }

  Usuario: Usuario = {
    usuarioID: 0,
    nombre: '',
    apellidoMaterno: '',
    apellidoPaterno: '',
    constraseña: '',
    correo: '',
    dependenciaID: 0,
    rolID: 3//Rol Predeterminado
  }

  DependenciaSe: Dependencia = {
    dependenciaID: 0,
    dependencia: ''
  };
  Dependencias: Dependencia[] = [];

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      lastname2: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{6,}$")
      ]]
    })
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
      this.DependenciaSe = this.Dependencias[0];
    });
  }


  async registrarUsuario() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm.status=='VALID') {
      this.Usuario.correo = this.regForm.get('email').value;
      this.Usuario.constraseña = this.regForm.get('password').value;
      this.Usuario.nombre = this.regForm.get('name').value;
      this.Usuario.apellidoPaterno = this.regForm.get('lastname').value;
      this.Usuario.apellidoMaterno = this.regForm.get('lastname2').value;
      this.Usuario.dependenciaID=this.DependenciaSe.dependenciaID;
      console.log(this.Usuario)
      this.apiService.postUsuario(this.Usuario).then(()=>{
        loading.dismiss();
        this.route.navigate(['login'])
      })
    }
  }


  mostrarDependencias() {
    this.showDependencias = !this.showDependencias;
  }
  onIonChangeD(event: CustomEvent) {
    this.DependenciaSe = event.detail.value;
  }
}


