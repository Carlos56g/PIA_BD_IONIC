import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.page.html',
  styleUrls: ['./eliminar-usuario.page.scss'],
})
export class EliminarUsuarioPage implements OnInit {

  constructor(public apiService:ApiBdService, public actionSheetCtrl:ActionSheetController) { }
  UsuariosM: any;
  ngOnInit() {
    this.apiService.mostrarUsuarios().then(()=>{
      this.UsuariosM=this.apiService.UsuariosM
    });
  }

  async mostraActionSheet(i: number,UsuarioID:number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.apiService.deleteUsuario(UsuarioID);
            this.UsuariosM.splice(i,1);
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
