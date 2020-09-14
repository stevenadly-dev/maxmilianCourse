import { recipe } from "./../recipe.model";
import { RecipesService } from "./../recipes.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"],
})
export class RecipeDetailsComponent implements OnInit {
  // @Input() recipeDetail: recipe;
  recipeDetail: recipe;
  recipeDetailId: number;

  constructor(
    private RecipesService: RecipesService,
    private route: ActivatedRoute
  ) {}

  getRecipeDetails() {
    // this.RecipesService.outputrecipe.subscribe((res) => {
    //   this.recipeDetail = res;
    // });

    this.recipeDetail = this.RecipesService.getRecipeDetails(
      +this.route.snapshot.params["id"]
    );
  }

  refreshDetails() {
    this.route.params.subscribe((res) => {
      this.recipeDetailId = res["id"];
      this.recipeDetail = this.RecipesService.getRecipeDetails(
        this.recipeDetailId
      );
    });
  }

  addToCart(recipe: recipe) {
    this.RecipesService.addToCart(recipe);
  }

  ngOnInit(): void {
    this.getRecipeDetails();
    this.refreshDetails();
  }
}
