import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {catchError, Observable, throwError } from "rxjs";
import { BaseApiService } from "./base-api.service";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})

export class ApiService extends BaseApiService {
  protected baseUrl = 'http://localhost:5050/api'

  constructor(private http: HttpClient,
              private storageService: StorageService) {
    super();
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
    // Handle error, log or display appropriate messages
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
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
