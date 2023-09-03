import { Component } from '@angular/core';
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BudgetApp';

  public userLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userLoggedIn = this.authService.isUserLoggedIn()
  }
}
