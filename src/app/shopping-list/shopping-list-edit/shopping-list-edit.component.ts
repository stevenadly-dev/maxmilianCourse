import { ingrediant } from "./../../shared/models/ingrediant.model";
import { ShoppingListService } from "./../shopping-list.service";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
} from "@angular/core";
import { canDeactivateComponent } from "src/app/canDeactivate.guard";
import { Form } from "@angular/forms";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent
  implements OnInit, canDeactivateComponent {
  // @Input() itemInput: any;
  @ViewChild("itemName") itemName: ElementRef;
  @ViewChild("itemAmount") itemAmount: ElementRef;
  selectedItem;
  @ViewChild("shoppingListForm") shoppingListForm;
  @Output() elementToPush = new EventEmitter<any>();
  currentMode: string = "";
  currentIndex: number;

  constructor(private ShoppingListService: ShoppingListService) {}

  canDeactivate() {
    return confirm("are you sure you want to exit");
  }

  onSubmit(form: ingrediant) {
    console.log("form", form);
    if (this.currentMode == "editmode") {
      this.ShoppingListService.updateShoppingList(this.currentIndex, form);
    } else {
      this.ShoppingListService.getelementAndPush(form);
    }
    this.onClear();
  }

  getItemById() {
    this.ShoppingListService.toEditShoppingList.subscribe((data: number) => {
      this.currentIndex = data;

      this.selectedItem = this.ShoppingListService.getShoppingListItemById(
        this.currentIndex
      );
      this.currentMode = "editmode";
      this.shoppingListForm.setValue({
        name: this.selectedItem.name,
        amount: this.selectedItem.amount,
      });
    });
  }
  onClear() {
    this.currentMode = "";
    this.shoppingListForm.reset();
  }
  onDelete() {
    if (this.currentIndex + 1) {
      this.ShoppingListService.deleteItemFromList(this.currentIndex);
    }
    this.onClear();
  }

  ngOnInit(): void {
    this.getItemById();
  }
}
