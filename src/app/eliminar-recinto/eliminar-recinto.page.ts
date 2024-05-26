import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { Recinto } from '../models/recinto';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-recinto',
  templateUrl: './eliminar-recinto.page.html',
  styleUrls: ['./eliminar-recinto.page.scss'],
})
export class EliminarRecintoPage implements OnInit {

  Recintos:Recinto[]=[]
  constructor(public apiService:ApiBdService, public actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
    this.apiService.getRecintos().then(()=>{
      this.Recintos=this.apiService.Recintos
    })
  }

  async mostraActionSheet(i: number,RecintoID:number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.apiService.deleteRecinto(RecintoID);
            this.Recintos.splice(i,1);
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
