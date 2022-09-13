import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guia } from "./components/guide/guide.model";


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarGuias(guias: Guia[]){
        this.httpClient.post('https://antilopeexpress-d2ecf-default-rtdb.europe-west1.firebasedatabase.app/datos.json',guias).subscribe(
            response=>console.log("seha a guardado guias:" + response),
            error => console.log("Error : "+ error),
        )
    }

}