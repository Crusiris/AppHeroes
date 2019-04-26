import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    });
  }

  ngOnInit() {}

  deleteHeroe(key$: string) {
    this.heroesService.deleteHeroe(key$).subscribe(respuesta => {
      if (respuesta) {
        console.log(respuesta);
      } else {
        //todo bien
        delete this.heroes[key$];
      }
    });
  }
}
