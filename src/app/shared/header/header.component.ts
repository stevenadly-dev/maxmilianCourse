import { StoreDataService } from "./../store-data.service";
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() routingOutput = new EventEmitter<string>();
  constructor(private storeDataService: StoreDataService) {}

  ngOnInit(): void {
    this.navigateFn("recipe");
    this.getData();
  }

  navigateFn(myLink) {
    this.routingOutput.emit(myLink);
  }

  storeRecipes() {
    this.storeDataService.storeRecipes();
  }

  getData() {
    this.storeDataService.getData().subscribe();
  }
}
