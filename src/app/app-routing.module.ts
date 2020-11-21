import { getRecipesResolver } from "./shared/get-recipes.resolver";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-book/recipe-details/recipe-details.component";
import { canDeactivateGuard } from "./canDeactivate.guard";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { recipeBook } from "./recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";
import { authGuard } from "./auth.guard";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { NoRecipeDetailsComponent } from "./recipe-book/no-recipe-details/no-recipe-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: recipeBook,
    // outlet: "myoutlet",

    children: [
      { path: "", component: NoRecipeDetailsComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailsComponent,
        // resolve: { recipes: getRecipesResolver },
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        resolve: { recipes: getRecipesResolver },
      },
    ],
  },
  {
    path: "shoppinglist",
    component: ShoppingListComponent,
    children: [
      { path: "edit", component: ShoppingListEditComponent },
      {
        path: "edit/:id",
        component: ShoppingListEditComponent,
        canDeactivate: [canDeactivateGuard],
      },
    ],
    // canActivate: [authGuard],
    // canActivateChild: [authGuard],
  },

  {
    path: "**",
    component: NotFoundComponent,
    data: { errMsg: "page not found" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
