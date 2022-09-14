import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.serveces';
import { Guia } from './guide.model';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(private dataServices: DataServices, private http: HttpClient) {

  }



  ngOnInit(): void {

  }
  titulo = "registro de guias";
  guias: Guia[] = [
    
  ];
  descargarPDF(){
    this.downloadPDF();
  }
  agregarGuia() {
    let miGuia = new Guia(this.formnombre, this.formcedula, this.formremitente,
      this.formdestinatario, this.formempresa, this.formcorreo, this.formcelular)
      this.guias.push(miGuia)
      this.dataServices.guardarGuias(this.guias)
 
    console.log(this.guias)
  }
  formnombre: string = "";
  formcedula: string = "";
  formremitente: string = "";
  formdestinatario: string = "";
  formempresa: string = "";
  formcorreo: string = "";
  formcelular: string = "";
  downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }





}
