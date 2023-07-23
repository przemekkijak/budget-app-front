import { Injectable } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { BaseApiService } from "src/app/core/services/base-api.service";
import { Budget } from "../models/budget";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BudgetsApiService extends BaseApiService {
  protected baseUrl = '/budgets';

  constructor(private apiService: ApiService) {
    super();
  }

  getBudget(): Observable<Budget> {
    return this.apiService.get(this.baseUrl)
  }
}
