import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage implements OnInit{

  Eventos:any;
  newEvento:any;

  APIURL="http://localhost:5000/"

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getEventos()
  }


  getEventos(){
    this.http.get(this.APIURL+"getEventos()").subscribe((res)=>{
      console.log(res);
      this.Eventos=res;
      console.log(this.Eventos);
    })

  }

  /*add_task(){
    let body=new FormData();
    body.append('task',this.newEvento);
    this.http.post(this.APIURL+"add_task",body).subscribe((res)=>{
      alert(res)
      this.newEvento=""
      this.get_task();
    })
  }

  delete_task(id:any){
    let body=new FormData();
    body.append('id',id);
    this.http.post(this.APIURL+"delete_task()",body).subscribe((res)=>{
      alert(res)
      this.get_task();
    })

  }*/

}