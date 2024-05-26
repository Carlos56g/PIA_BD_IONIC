import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiBdService } from '../servicios/api-bd.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { SesionStorageService } from '../sesion-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logForm: FormGroup;
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
  storedValue: string | null = '';
  Correo:string;
  Constraseña:string;
  
  constructor(public formBuilder: FormBuilder,public loadingCtrl: LoadingController, public apiService: ApiBdService, public route:Router,private alertController: AlertController,public sessionStorageService: SesionStorageService) { }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
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
  }

  async loginUsuario() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.logForm.status=='VALID') {
      this.Correo = this.logForm.get('email').value;
      this.Constraseña = this.logForm.get('password').value;
      this.apiService.getUsuario(this.Correo).then(()=>{
        console.log(this.apiService.Usuario.constraseña,"==",this.Constraseña)
        if(this.Constraseña==this.apiService.Usuario.constraseña){
          this.Usuario=this.apiService.Usuario;
          loading.dismiss();
          const rolIDString=this.Usuario.rolID.toString()
          this.saveValue(rolIDString)
          this.route.navigate(['eventos']);
        }else{
          loading.dismiss();
          this.alertaContraseña();
        }
      }).catch((error) => {
        loading.dismiss();
        this.alertaUsuario();
      });
    }

  }

  async alertaContraseña() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: 'La Constraseña es Incorrecta',
      message: 'La contraseña Ingresada es Incorrecta.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  async alertaUsuario() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: 'Usuario No Encontrado',
      message: 'Su Correo Electronico no se Encuentra en el sistema, pruebe registrandose.',
      buttons: ['Action'],
    });

    await alert.present();
  }

  saveValue(value: string) {
    this.sessionStorageService.setItem('myKey', value);
    this.loadStoredValue();
  }
  loadStoredValue() {
    this.storedValue = this.sessionStorageService.getItem('myKey');
    console.log(this.storedValue)
  }



}
