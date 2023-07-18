import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: ''
    })
  }

  onSubmit() {
    const formData = this.loginForm.value;
  }

}
