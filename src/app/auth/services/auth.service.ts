import { Injectable } from "@angular/core";
import { StorageService } from "src/app/core/services/storage.service";
import {Router} from "@angular/router";
import {LoginResult} from "../models/login-result";
import {catchError, map, Observable, of} from "rxjs";
import {AuthApiService} from "./auth-api.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private storageService: StorageService,
              private authApiService: AuthApiService,
              private router: Router) {
  }

  private userId: number | null = null;

  isUserLoggedIn(): boolean {
    return this.getUserId() != null;
  }

  getUserId(): number | null {
    let token = this.storageService.readToken();
    if (token === null) {
      this.logout();
      return null;
    }

    return token.user.id;
  }

  login(credentials: any): Observable<boolean> {
    return this.authApiService.login(credentials).pipe(
      map((res) => {
        if (res.token) {
          this.storageService.saveToken(res);
          this.userId = res.user.id;
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  logout() {
    this.storageService.deleteToken();
    this.userId = null;
    this.router.navigate(['auth/login'])
  }
}
