import {TransactionsApiService} from "./transactions-api.service";
import {Transaction} from "../models/transaction";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {
  constructor(private transactionApiService: TransactionsApiService) {
  }

  getTransactionsForBudget(budgetId: number): Observable<Transaction[]> {
    return this.transactionApiService.getTransactionsForBudget(budgetId)
  };

}
