import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from "../interface/heroe.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  fireURL: string = "https://heroesapp-20244.firebaseio.com/heroes.json";
  firesURL: string = "https://heroesapp-20244.firebaseio.com/heroes/";

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

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "aplication/json"
    });

    let url = `${this.firesURL}/${key$}.json`;

    return this.httpclient.put(url, body, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }

  getHeroe(key$: string) {
    let url = `${this.firesURL}/${key$}.json`;
    return this.httpclient.get(url).pipe(map(res => res));
  }

  getHeroes() {
    return this.httpclient.get(this.fireURL).pipe(map(res => res));
  }
}
