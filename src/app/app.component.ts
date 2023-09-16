import { Component } from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BudgetApp';

  public userLoggedIn: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.userLoggedIn = this.authService.isUserLoggedIn()
  }

  isLoginRoute(): boolean {
    return this.router.url.includes('login');
  }
}
