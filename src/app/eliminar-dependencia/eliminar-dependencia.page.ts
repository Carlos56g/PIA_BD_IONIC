import { Component, OnInit } from '@angular/core';
import { Dependencia } from '../models/dependencia';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-dependencia',
  templateUrl: './eliminar-dependencia.page.html',
  styleUrls: ['./eliminar-dependencia.page.scss'],
})
export class EliminarDependenciaPage implements OnInit {
  Dependencias: Dependencia[] = [];
  constructor(public apiService:ApiBdService,public actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
    this.apiService.getDependencias().then(() => {
      this.Dependencias = this.apiService.Dependencias;
    });
  }

  async mostraActionSheet(i: number,DependenciaID:number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.apiService.deleteDependencia(DependenciaID);
            this.Dependencias.splice(i,1);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    await actionSheet.present();
  }
  

}
