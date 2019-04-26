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
    this.actRoute.params.subscribe(parametros => {
      this.id = parametros["id"];
      if (this.id !== "nuevo") {
        this._heroesService
          .getHeroe(this.id)
          .subscribe((data: Heroe) => (this.heroe = data));
      }
    });
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

  // agregarNuevo(forma: NgForm) {
  //   this.router.navigate(["/heroe", "nuevo"]);
  //   // forma.reset();

  //   // this.router.navigate(["/heroe", "new"]);
  //   // forma.onReset();

  agregarNuevo(forma: NgForm) {
    this.router.navigate(["/heroe", "nuevo"]);

    forma.reset({
      casa: "Marvel"
    });
  }
}
