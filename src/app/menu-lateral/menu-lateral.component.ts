import { Component, OnInit } from '@angular/core';
import { ApiBdService } from '../servicios/api-bd.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent  implements OnInit {

  constructor(public apiService : ApiBdService,public Aroute:ActivatedRoute) { }

  //ROLID:number=3;//ROL PREDETERMINADO
  ngOnInit() {
  }


}
