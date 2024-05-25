import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.page.html',
  styleUrls: ['./eliminar-evento.page.scss'],
})
export class EliminarEventoPage implements OnInit {

  constructor(private apiService:ApiBdService, public actionSheetCtrl:ActionSheetController) { }

  EventosM:any=[]

  ngOnInit() {
      this.apiService.mostrarEventos().then(()=>{
    this.EventosM=this.apiService.EventosM
    console.log(this.EventosM)
  })
  }


  async mostraActionSheet(i: number,EventoID:number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.apiService.deleteEvento(EventoID);
            this.EventosM.splice(i,1);
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
