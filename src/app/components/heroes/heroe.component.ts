import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

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

  constructor(private _heroesService: HeroesService, private router: Router) {}

  guardar() {
    console.log(this.heroe);
    this._heroesService.nuevoHeroe(this.heroe).subscribe(
      data => {
        this.router.navigate(["/heroe", data["name"]]);
      },
      error => console.error(error)
    );
  }
}
