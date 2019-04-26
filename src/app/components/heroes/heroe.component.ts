import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Heroe } from "../../interface/heroe.interface";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent {
  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };

  nuevo: boolean = false;
  id: string;

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.actRoute.params.subscribe(parametros => (this.id = parametros["id"]));
  }

  guardar() {
    console.log(this.heroe);

    if (this.id == "nuevo") {
      //insertando

      this._heroesService.nuevoHeroe(this.heroe).subscribe(
        data => {
          this.router.navigate(["/heroe", data["name"]]);
        },
        error => console.error(error)
      );
    } else {
      //actualizando

      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(
        data => {
          console.log(data);
        },
        error => console.error(error)
      );
    }
  }
}
