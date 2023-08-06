import { Injectable } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { BaseApiService } from "src/app/core/services/base-api.service";
import {Transaction} from "../models/transaction";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TransactionsApiService extends BaseApiService {
    protected baseUrl = '/transactions';

    constructor(private apiService: ApiService) {
      super();
    }

    getTransactionsForBudget(budgetId: number): Observable<Transaction[]> {
      return this.apiService.get(`${this.baseUrl}/${budgetId}`)
    }

    addTransaction(transaction: Transaction) {
      return this.apiService.post(this.baseUrl, transaction)
    }

    updateTransaction(transaction: Transaction) {
      return this.apiService.patch(this.baseUrl, transaction)
    }
}
