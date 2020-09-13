import { ingrediant } from "src/app/shared/models/ingrediant.model";
import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { recipe } from "./recipe.model";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes: recipe[] = [
    {
      name: "pasta",
      description: "lorem lorem lorem",
      imgPath: "assets/recipe.jpg",
      ingrediants: [
        { name: "eggs", amount: 2 },
        { name: "milk", amount: 1 },
        { name: "cheese", amount: 3 },
      ],
    },
    {
      name: "burger",
      description: "lorem lorem lorem",
      imgPath: "assets/recipe.jpg",
      ingrediants: [
        { name: "meet", amount: 3 },
        { name: "oninion", amount: 1 },
      ],
    },
    {
      name: "pizza",
      description: "lorem lorem lorem",
      imgPath: "assets/recipe.jpg",
      ingrediants: [
        { name: "chicken", amount: 2 },
        { name: "floor", amount: 100 },
      ],
    },
    {
      name: "omlet",
      description: "lorem lorem lorem",
      imgPath: "assets/recipe.jpg",
      ingrediants: [
        { name: "egg", amount: 2 },
        { name: "butter", amount: 100 },
      ],
    },
  ];
  @Output() outputrecipe: EventEmitter<recipe> = new EventEmitter<recipe>();

  constructor(
    private ShoppingListService: ShoppingListService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  getAllRecipes() {
    return this.recipes;
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
      this.router.navigate(["shopping-list"], {
        relativeTo: this.activedRoute,
      });
    } else {
      this.ShoppingListService.getelementAndPush({
        name: recipe.name,
        amount: 1,
      });
    }
  }
}
