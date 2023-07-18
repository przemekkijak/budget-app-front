import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('budgetToken', token);
  }

  readToken(): string | null {
    return localStorage.getItem('budgetToken');
  }

  deleteToken(): void {
    localStorage.removeItem('budgetToken');
  }
}
