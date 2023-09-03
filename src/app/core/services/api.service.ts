import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {catchError, Observable } from "rxjs";
import { BaseApiService } from "./base-api.service";
import {StorageService} from "./storage.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class ApiService extends BaseApiService {
  protected baseUrl = 'http://localhost:5050/api'

  constructor(private http: HttpClient,
              private storageService: StorageService,
              private router: Router) {
    super();
    this.handleError = this.handleError.bind(this);
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();

    const tokenModel = this.storageService.readToken()
    if (tokenModel) {
      headers = headers.set('Authorization', `Bearer ${tokenModel.token}`)
    }

    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);

    if (error.status === 401) {
      this.storageService.deleteToken();
      this.router.navigate(['auth/login'])
    }

    throw new Error('API Error');
  }

  get<T>(path: string): Observable<T> {
    const headers = this.getHeaders()
    return this.http.get<T>(`${this.baseUrl}${path}`, { headers: headers }).pipe(catchError(this.handleError))
  }

  post<T>(path: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.post<T>(`${this.baseUrl}${path}`, body, { headers: headers}).pipe(catchError(this.handleError));
  }

  patch<T>(path: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.patch<T>(`${this.baseUrl}${path}`, body, { headers: headers}).pipe(catchError(this.handleError));
  }
}
