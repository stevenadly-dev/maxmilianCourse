import { ingrediant } from "./../shared/models/ingrediant.model";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  @Output() newIngredients: EventEmitter<ingrediant[]> = new EventEmitter<
    ingrediant[]
  >();
  toEditShoppingList = new Subject();
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

  getShoppingListItemById(id: number) {
    return this.ingredients[id];
  }

  getelementAndPush(el: ingrediant) {
    this.ingredients.push(el);
    this.newIngredients.emit(this.ingredients.slice());
  }
  updateShoppingList(index: number, el: ingrediant) {
    this.ingredients[index] = el;
    this.newIngredients.emit(this.ingredients.slice());
  }

  deleteItemFromList(index: number) {
    this.ingredients.splice(index, 1);
    this.newIngredients.emit(this.ingredients.slice());
    debugger;
  }
}
