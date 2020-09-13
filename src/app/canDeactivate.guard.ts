import {
  Router,
  ActivatedRouteSnapshot,
  CanDeactivate,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { RouterStateSnapshot } from "@angular/router";
export interface canDeactivateComponent {
  canDeactivate: () =>
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}
export class canDeactivateGuard
  implements CanDeactivate<canDeactivateComponent> {
  canDeactivate(
    Component: canDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    netState: RouterStateSnapshot
  ) {
    // return false;
    return Component.canDeactivate();
  }
}
