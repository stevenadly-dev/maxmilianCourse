import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
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
import { rejects } from "assert";

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
  currentrecipeId: number;
  searchValue: string;
  ayncData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("news");
    }, 2000);
    // reject("reject");
  });

  @ViewChild("helloElemet") helloElemet: ElementRef;
  constructor(
    private RecipesService: RecipesService,
    private authservice: AuthService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  // searchChanged(text: string) {
  // }

  ngOnInit(): void {
    this.recipes = this.RecipesService.getAllRecipes();
    this.getRecpiesData();
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

  getRecpiesData() {
    this.RecipesService.allRecipesSubject.subscribe((res) => {
      this.recipes = res;
    });
  }
}
