import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  errMsg: string;
  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.errMsg = this.ActivatedRoute.snapshot.data["errMsg"];
    // this.ActivatedRoute.data.subscribe((res) => {
    //   this.errMsg = res["errMsg"];
    // });
    debugger;
  }
}
