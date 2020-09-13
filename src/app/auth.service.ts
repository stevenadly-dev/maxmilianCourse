import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLogged: boolean = false;

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  checAuth() {
    let isAuth = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged);
      }, 2000);
    });

    return isAuth;
  }

  constructor() {}
}
