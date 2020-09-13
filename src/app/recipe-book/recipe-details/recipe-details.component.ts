import { recipe } from "./../recipe.model";
import { RecipesService } from "./../recipes.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() recipeDetail: recipe;
  recipeDetail: recipe;

  constructor(private RecipesService: RecipesService) {}

  getRecipeDetails() {
    this.RecipesService.outputrecipe.subscribe((res) => {
      this.recipeDetail = res;
    });
  }

  addToCart(recipe: recipe) {
    this.RecipesService.addToCart(recipe);
  }
  ngOnInit(): void {
    this.getRecipeDetails();
  }
}
