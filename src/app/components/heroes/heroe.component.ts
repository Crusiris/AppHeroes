import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Heroe } from "../../interface/hero.interface";

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

  constructor() {}

  guardar() {
    console.log(this.heroe);
  }
}
