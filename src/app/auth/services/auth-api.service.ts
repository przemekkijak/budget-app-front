import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../../core/services/api.service";
import { BaseApiService } from "../../core/services/base-api.service";
import { LoginResult } from "../models/login-result";

@Injectable({
  providedIn: 'root'
})

export class AuthApiService extends BaseApiService {
  protected baseUrl = '/users';

  constructor(private apiService: ApiService) {
    super();

  }

  login(credentials: any): Observable<LoginResult> {
    return this.apiService.post(`${this.baseUrl}/login`, credentials)
  }
}
