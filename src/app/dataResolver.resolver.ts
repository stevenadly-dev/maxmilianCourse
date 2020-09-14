import { Observable } from "rxjs";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
interface recipeData {
  name?: string;
  id?: number;
}
export class dataResolver implements Resolve<recipeData> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<recipeData> | Promise<recipeData> | recipeData {
    debugger;
    return route.data["errMsg"];
  }
}
