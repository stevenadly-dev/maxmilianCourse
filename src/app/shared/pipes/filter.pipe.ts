import { recipe } from "./../../recipe-book/recipe.model";
import { PipeTransform, Pipe } from "@angular/core";
@Pipe({ name: "filterText", pure: false })
export class filterText implements PipeTransform {
  transform(recipes: recipe[], stringFilterValue: string) {
    if (recipes && stringFilterValue?.length > 0) {
      return recipes.filter((x) => x.name.includes(stringFilterValue));
    } else return recipes;
  }
}
