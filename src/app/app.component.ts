import { Component } from "@angular/core";
import { recipe } from "./recipe-book/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "maxcoursefullguide";
  name: string = "";
  currentRecipe: recipe;

  currentLink = "recipe";
  getName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  getLink(link) {
    this.currentLink = link;
  }
}
