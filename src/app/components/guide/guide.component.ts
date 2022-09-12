import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
  mensaje = "";
  registado = false;

  nombres:string="";
  cedula:string="";
  remitente:string="";
  destinatario:string="";
  empresa:string="";
  celular:string="";



  registrarGuia() {
    this.registado = true
    this.mensaje = "Guia enviada con exito"
  }

}
