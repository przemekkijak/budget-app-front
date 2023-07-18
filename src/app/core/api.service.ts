import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, throwError } from "rxjs";

export class ApiService {
  private apiUrl = 'http://localhost:5050/api'

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders();

    //TODO add auth header
    return headers;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle error, log or display appropriate messages
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }

  post<T>(path: string, body: any): Observable<T> {
    const headers = this.getHeaders();
    return this.http.post<T>(`${this.apiUrl}${path}`, body, { headers}).pipe(catchError(this.handleError));
  }
}
