import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import { AuthApiService } from '../services/auth-api.service';
import { LoginResult } from '../models/login-result';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  onSubmit() {
    const formData = this.loginForm.value;
    this.login(formData);
  }

  login(formData: any) {
    this.authService.login(formData).subscribe((res) => {
      if (res) {
        this.router.navigate(['dashboard'])
      }
    })
  }
}
