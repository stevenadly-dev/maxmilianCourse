import { recipe } from "./../recipe.model";
import { RecipesService } from "./../recipes.service";
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipeDetails();
    this.refreshDetails();
  }

  getRecipeDetails() {
    // this.RecipesService.outputrecipe.subscribe((res) => {
    //   this.recipeDetail = res;
    // });
    this.route.params.subscribe((res) => {
      this.recipeDetail = this.RecipesService.getRecipeDetails(+res);
    });
  }

  refreshDetails() {
    this.route.params.subscribe((res) => {
      this.recipeDetailId = res["id"];
      if (
        !this.RecipesService.getAllRecipes()[this.recipeDetailId] &&
        this.recipeDetailId.toString() !== "new"
      ) {
        debugger;
        this.router.navigate(["/recipes"]);
      }
      this.recipeDetail = this.RecipesService.getRecipeDetails(
        this.recipeDetailId
      );
    });
  }

  deleteRecipe(index: number) {
    this.RecipesService.deleteRecipe(index);
  }
  addToCart(recipe: recipe) {
    this.RecipesService.addToCart(recipe);
  }
}
