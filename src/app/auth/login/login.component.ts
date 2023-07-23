import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from 'src/app/core/services/storage.service';
import { AuthApiService } from '../services/auth-api.service';
import { LoginResult } from '../models/login-result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authApiService: AuthApiService,
              private storageService: StorageService) {
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
    this.authApiService.login(formData).subscribe((res: LoginResult) => {
      if (res.token) {
        this.storageService.saveToken(res);
        console.log('user logged, token saved')
        console.log(res)
      }
    })
  }
}
