import { ActivatedRoute, Params, Router } from "@angular/router";
import { ShoppingListService } from "./../shopping-list.service";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { ingrediant } from "src/app/shared/models/ingrediant.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: ingrediant[] = [];
  selectedItem;
  routingSubscription: Subscription;
  // @Output() elementOutput = new EventEmitter<any>();

  constructor(
    private ShoppingListService: ShoppingListService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.newIngredients.subscribe((res) => {
      this.ingredients = res;
    });

    // if you will redidirect from component to same component use subscribe method
    // because of angular will not reinitialize the component again

    console.log(this.ActivatedRoute.snapshot.params["id"]);

    this.routingSubscription = this.ActivatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params["id"]);
      }
    );

    this.ActivatedRoute.queryParams.subscribe((qprams) => {
      console.log(qprams);
    });

    this.ActivatedRoute.fragment.subscribe((frag) => {
      console.log("frag", frag);
    });
  }

  showItem(item) {
    this.selectedItem = item;
  }

  onEditIngredient(x: number) {
    // this.ShoppingListService.getShoppingListItemById(x);
    this.ShoppingListService.toEditShoppingList.next(x);
    // alert(x);
  }

  getelementAndPush(el: ingrediant) {
    this.ShoppingListService.getelementAndPush(el);
  }

  reloadServer(id: number) {
    this.router.navigate(
      ["/shoppinglist", id]
      // , {
      //   queryParams: {
      //     name: "steven",
      //     id: 33,
      //   },
      //   fragment: "fragmentname",
      // }
    );
  }
  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }
}
