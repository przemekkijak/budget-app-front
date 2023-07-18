import { tap } from "rxjs";
import { ApiService } from "../core/api.service";

export class AuthApiService {
  private readonly baseUrl = 'auth';

  constructor(private apiService: ApiService) {}

  login(credentials: any) {
    return this.apiService.post(`${this.baseUrl}/login`, credentials).pipe(
      tap(res => {
        console.log(res)
      })
    )
  }
}
