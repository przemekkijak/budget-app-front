import {Injectable} from "@angular/core";
import {BaseApiService} from "../../core/services/base-api.service";
import {ApiService} from "../../core/services/api.service";
import {BankAccount} from "../models/bankAccount";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BankAccountsApiService extends BaseApiService {
  protected baseUrl = '/bankaccounts';

  constructor (private apiService: ApiService) {
    super();
  }

  getBankAccountsForBudget(budgetId: number): Observable<BankAccount[]> {
    return this.apiService.get(`${this.baseUrl}/${budgetId}`)
  }
}
