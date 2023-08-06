import {Injectable} from "@angular/core";
import {BankAccountsApiService} from "./bank-accounts-api.service";
import {BankAccount} from "../models/bankAccount";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BankAccountsService {
  constructor(private bankAccountApiService: BankAccountsApiService) {
  }

  getBankAccountsForBudget(budgetId: number): Observable<BankAccount[]> {
    return this.bankAccountApiService.getBankAccountsForBudget(budgetId);
  }
}
