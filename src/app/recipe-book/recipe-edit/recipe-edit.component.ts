import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  mainMsg: string;
  ID: number;
  constructor(private router: ActivatedRoute) {}

  checkID() {
    this.router.params.subscribe((res) => {
      console.log("res", res);

      this.ID = +res["id"];
      if (this.ID) {
        this.mainMsg = "edit page";
      } else {
        this.mainMsg = "new page";
      }
    });
  }
  ngOnInit(): void {
    this.checkID();
  }
}
