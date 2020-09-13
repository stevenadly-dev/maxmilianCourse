import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() routingOutput = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.navigateFn("recipe");
  }

  navigateFn(myLink) {
    this.routingOutput.emit(myLink);
  }
}
