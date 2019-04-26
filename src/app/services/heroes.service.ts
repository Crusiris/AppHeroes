import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from "../interface/heroe.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  fireURL: string = "https://heroesapp-20244.firebaseio.com/heroes.json";

  constructor(private httpclient: HttpClient) {}

  //Metodo para insertar un nuevo Registro

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "aplication/json"
    });

    return this.httpclient.post(this.fireURL, body, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
}
