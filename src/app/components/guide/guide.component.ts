import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.serveces';
import { Guia } from './guide.model';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private dataServices:DataServices, private http: HttpClient) {

  }

  ngOnInit(): void {

  }
  titulo = "registro de guias";
  guias: Guia[] = [
    new Guia("javi", "mena 2 ", "kevin", "1726437864", "wallpana", "087044553", "kekev.com")
  ];

  agregarGuia() {
    let miGuia = new Guia(this.formnombre, this.formcedula, this.formremitente, 
      this.formdestinatario, this.formempresa, this.formcorreo, this.formcelular)
      this.guias.push(miGuia)
      this.dataServices.guardarGuias(this.guias)
  }



  formnombre: string = "";
  formcedula: string = "";
  formremitente: string = "";
  formdestinatario: string = "";
  formempresa: string = "";
  formcorreo: string = "";
  formcelular: string = "";



}
