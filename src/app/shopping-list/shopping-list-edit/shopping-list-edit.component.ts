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

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent
  implements OnInit, canDeactivateComponent {
  @Input() itemInput: any;
  @ViewChild("itemName") itemName: ElementRef;
  @ViewChild("itemAmount") itemAmount: ElementRef;

  @Output() elementToPush = new EventEmitter<any>();

  constructor(private ShoppingListService: ShoppingListService) {}

  canDeactivate() {
    return confirm("are you sure you want to exit");
  }

  addNewItem() {
    this.ShoppingListService.getelementAndPush({
      name: this.itemName.nativeElement.value,
      amount: this.itemAmount.nativeElement.value,
    });
  }

  ngOnInit(): void {}
}
