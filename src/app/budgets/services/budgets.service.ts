import { Injectable } from "@angular/core";
import { Budget } from "../models/budget";
import { BudgetsApiService } from "./budgets-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BudgetsService {
  constructor(private budgetApiService: BudgetsApiService) {
  }

  getBudget(): Observable<Budget> {
    return this.budgetApiService.getBudget();
  };
}
