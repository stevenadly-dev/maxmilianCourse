import { Observable } from "rxjs";
import { recipe } from "./../recipe-book/recipe.model";
import { StoreDataService } from "./store-data.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from "@angular/router";
@Injectable({
  providedIn: "root", // **** ADD THIS LINE ****
})
export class getRecipesResolver implements Resolve<recipe[]> {
  constructor(private storeDataService: StoreDataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    debugger;
    return this.storeDataService.getData();
  }
}
