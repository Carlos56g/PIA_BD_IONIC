import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActivatedRoute } from '@angular/router';
import { SesionStorageService } from '../sesion-storage.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent  implements OnInit {
  storedValue: string | null = '';

  constructor(public apiService : ApiBdService,public Aroute:ActivatedRoute,public sessionStorageService: SesionStorageService) { 
  
  }

  //ROLID:number=3;//ROL PREDETERMINADO
  ngOnInit() {
    this.loadStoredValue();
  }
   // Guardar un valor en Session Storage
   saveValue(value: string) {
    this.sessionStorageService.setItem('myKey', value);
    this.loadStoredValue();
  }

  // Cargar un valor desde Session Storage
  loadStoredValue() {
    this.storedValue = this.sessionStorageService.getItem('myKey');
    console.log(this.storedValue)
  }

  // Eliminar el valor de Session Storage
  removeValue() {
    this.sessionStorageService.removeItem('myKey');
    this.loadStoredValue();
  }

  // Limpiar todo el Session Storage
  clearStorage() {
    this.sessionStorageService.clear();
    this.loadStoredValue();
  }

}
