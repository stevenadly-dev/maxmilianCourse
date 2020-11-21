import { StoreDataService } from "./../shared/store-data.service";
import { ingrediant } from "src/app/shared/models/ingrediant.model";
import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { recipe } from "./recipe.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
// import { threadId } from "worker_threads";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes: recipe[] = [];

  @Output() outputrecipe: EventEmitter<recipe> = new EventEmitter<recipe>();
  searchSubject: Subject<string> = new Subject<string>();
  allRecipesSubject: Subject<recipe[]> = new Subject<recipe[]>();

  constructor(
    private ShoppingListService: ShoppingListService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  getAllRecipes() {
    // this.recipes=
    return this.recipes;
    // this.storeDataService.getData();
  }

  editRecipe(index: number, recipe: recipe) {
    this.recipes[index] = recipe;
  }

  getRecipeDetails(i: number) {
    return this.recipes[i];
  }

  addRecipes(recipe: recipe) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  addToCart(recipe: recipe) {
    debugger;
    let ifExist = this.ShoppingListService.ingredients.find((el) => {
      return el.name == recipe.name;
    });

    if (ifExist) {
      let index = this.ShoppingListService.ingredients.indexOf(ifExist);
      this.ShoppingListService.ingredients[index].amount =
        this.ShoppingListService.ingredients[index].amount + 1;
      this.router.navigate(["shoppinglist"], {
        relativeTo: this.activedRoute,
      });
    } else {
      debugger;
      this.ShoppingListService.getelementAndPush({
        name: recipe.name,
        amount: 1,
      });
    }
  }

  countRecipies() {
    return this.recipes.length;
  }

  searchWith(text: string) {
    this.searchSubject.next(text);
  }

  setRecipies(recipes: recipe[]) {
    this.recipes = recipes;
    this.allRecipesSubject.next(this.recipes);
  }
}
