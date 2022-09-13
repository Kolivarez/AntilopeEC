export class Guia{

    constructor(nombre:string, cedula:string, remitente:string,destinatario:string,empresa:string,correo:string,celular:string){
        this.nombre=nombre;
        this.cedula=cedula;
        this.remitente=remitente;
        this.destinatario=destinatario;
        this.empresa=empresa;
        this.correo=correo;
        this.celular=celular;
    }
    
  nombre:string="";
  cedula:string="";
  remitente:string="";
  destinatario:string="";
  empresa:string="";
  correo:string="";
  celular:string="";
}