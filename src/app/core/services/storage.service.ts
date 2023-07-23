import { Injectable } from '@angular/core';
import { LoginResult } from 'src/app/auth/models/login-result';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  saveToken(loginResult: LoginResult): void {
    localStorage.setItem('budgetToken', JSON.stringify(loginResult));
  }

  readToken(): LoginResult | null {
    const result = localStorage.getItem('budgetToken');
    if (result) {
      const parsedLoginResult: LoginResult = JSON.parse(result)
      return parsedLoginResult
    }

    return null;
  }

  deleteToken(): void {
    localStorage.removeItem('budgetToken');
  }
}
