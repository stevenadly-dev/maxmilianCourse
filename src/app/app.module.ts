import { canDeactivateGuard } from "./canDeactivate.guard";
import { appUnlessDirective } from "./shared/directives/app-unless.directive";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";

import { recipeBook } from "./recipe-book/recipes/recipes.component";
import { RecipeItemComponent } from "./recipe-book/recipe-item/recipe-item.component";
import { RecipeDetailsComponent } from "./recipe-book/recipe-details/recipe-details.component";

import { AppToGreenDirective } from "./app-to-green.directive";
import { AppHighlightDirective } from "./shared/directives/app-highlight.directive";
import { DropdownDirective } from "./shared/directives/dropdown.directive";

import { RecipesService } from "./recipe-book/recipes.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { authGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToGreenDirective,
    recipeBook,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AppHighlightDirective,
    appUnlessDirective,
    DropdownDirective,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    RecipesService,
    ShoppingListService,
    authGuard,
    canDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
