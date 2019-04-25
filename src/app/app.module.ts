import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { APP_ROUTING } from "./app.routes";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroeComponent],
  imports: [BrowserModule, HttpClientModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}