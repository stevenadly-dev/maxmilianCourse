import { recipe } from "./../recipe-book/recipe.model";
import { RecipesService } from "./../recipe-book/recipes.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StoreDataService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  storeRecipes() {
    let recipes = this.recipesService.getAllRecipes();
    this.http
      .put(
        "https://ng-recipe-book-course-pr-a4112.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getData() {
    return (
      this.http
        .get<recipe[]>(
          "https://ng-recipe-book-course-pr-a4112.firebaseio.com/recipes.json"
        )
        // to check for each elment in the recipes array has ingredients
        .pipe(
          map((recipes) => {
            return recipes.map((recipe) => {
              return {
                ...recipe,
                ingrediants: recipe.ingrediants ? recipe.ingrediants : [],
              };
            });
          })
        )
        .pipe(
          tap((recipies) => {
            this.recipesService.setRecipies(recipies);
          })
        )
    );
  }
}
