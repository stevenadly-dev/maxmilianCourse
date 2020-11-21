import { ingrediant } from "./../../shared/models/ingrediant.model";
import { element } from "protractor";
import { recipe } from "./../recipe.model";
import { RecipesService } from "./../recipes.service";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  mainMsg: string;
  ID: number;
  currentMode: string;
  recipeEditForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private RecipesService: RecipesService
  ) {}

  checkID() {
    this.activatedRoute.params.subscribe((res) => {
      console.log("res", res);

      this.ID = +res["id"];

      if (
        !this.RecipesService.getAllRecipes()[this.ID] &&
        this.currentMode == "editMode"
      ) {
        this.router.navigate(["/recipes"]);
        debugger;
      }
      if (this.ID + 1 && this.RecipesService.getAllRecipes()[this.ID]) {
        this.mainMsg = "edit page";
        this.currentMode = "editMode";
        this.initForm();
        debugger;
      } else {
        this.mainMsg = "new page";
        this.currentMode = "createMode";
        this.initForm();
        console.log(
          "this.RecipesService.getAllRecipes()",
          this.RecipesService.getAllRecipes()
        );
        debugger;
      }
    });
  }
  ngOnInit(): void {
    this.checkID();
    // this.initForm();
  }

  initForm() {
    // =================add default values=============
    let recipeName = "";
    let recipeImgPath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    // =================edit mode=============
    if (this.currentMode == "editMode") {
      let currentRecipie = this.RecipesService.getRecipeDetails(this.ID);
      debugger;

      recipeName = currentRecipie.name;
      recipeImgPath = currentRecipie.imgPath;
      recipeDescription = currentRecipie.description;

      if (currentRecipie["ingrediants"]) {
        for (let recipeIngredient of currentRecipie.ingrediants) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(recipeIngredient.name, [
                Validators.required,
              ]),
              amount: new FormControl(recipeIngredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    // ==================init form=====================
    this.recipeEditForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imgPath: new FormControl(recipeImgPath, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      ingrediants: recipeIngredients,
      // by deafult it's empty value if it was at edit mode it will take the values
    });
  }
  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }
  onSubmit() {
    if (this.currentMode == "editMode") {
      this.RecipesService.editRecipe(this.ID, this.recipeEditForm.value);
    } else {
      this.RecipesService.addRecipes(this.recipeEditForm.value);
    }
    this.recipeEditForm.reset();
    this.onCancel();
  }

  onAddIngrediant() {
    (<FormArray>this.recipeEditForm.get("ingrediants")).push(
      new FormGroup({
        name: new FormControl(""),
        amount: new FormControl("", [Validators.pattern(/^[1-9]+[0-9]*$/)]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeEditForm.get("ingrediants")).removeAt(index);
  }
  get getRecipeIngredients() {
    return (<FormArray>this.recipeEditForm.get("ingrediants")).controls;
  }
}
