import { Injectable, Output, EventEmitter } from "@angular/core";
import { ingrediant } from "../shared/models/ingrediant.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  @Output() newIngredients: EventEmitter<ingrediant[]> = new EventEmitter<
    ingrediant[]
  >();
  ingredients: ingrediant[] = [
    {
      name: "apples",
      amount: 50,
    },
    {
      name: "bananas",
      amount: 10,
    },
    {
      name: "watermilon",
      amount: 30,
    },
    {
      name: "sturrabrry",
      amount: 500,
    },
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  getelementAndPush(el: ingrediant) {
    this.ingredients.push(el);
    this.newIngredients.emit(this.ingredients.slice());
  }
}
