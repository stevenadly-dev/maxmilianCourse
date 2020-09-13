import { AuthService } from "./../../auth.service";
import { RecipesService } from "../recipes.service";
import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import { recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-book",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],

  // to disable encapculation
  encapsulation: ViewEncapsulation.None,
})
export class recipeBook implements OnInit, AfterViewInit {
  // el: string;
  recipes: recipe[] = [];

  @ViewChild("helloElemet") helloElemet: ElementRef;
  constructor(
    private RecipesService: RecipesService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.recipes = this.RecipesService.getAllRecipes();
  }

  ngAfterViewInit(): void {
    console.log("helloElemet", this.helloElemet);
  }

  showDetails(recipe: recipe) {
    this.RecipesService.outputrecipe.emit(recipe);
  }

  login() {
    this.authservice.login();
  }
  logout() {
    this.authservice.logout();
  }
}
