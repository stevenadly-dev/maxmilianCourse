import { canDeactivateGuard } from "./canDeactivate.guard";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { recipeBook } from "./recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";
import { authGuard } from "./auth.guard";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: recipeBook, pathMatch: "full" },
  { path: "recipes", component: recipeBook },
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
    data: { errMsg: "page not found ya 7beby" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
