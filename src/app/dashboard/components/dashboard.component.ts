import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../transactions/services/transactions.service";
import {Transaction} from "../../transactions/models/transaction";
import {BudgetsService} from "../../budgets/services/budgets.service";
import {Budget} from "../../budgets/models/budget";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public transactions: Transaction[] | null = null;
  public budget: Budget | null = null;

  constructor(private transactionsService: TransactionsService,
              private budgetService: BudgetsService) {
  }

  async ngOnInit() {
    this.getDefaultBudget().subscribe((budget) => {
      this.budget = budget;
      this.getTransactions();
    })
  }

  getDefaultBudget() {
    return this.budgetService.getBudget();
  }

  getTransactions() {
    if (this.budget != null) {
      this.transactionsService
        .getTransactionsForBudget(this.budget.id)
        .subscribe((res) => {
          this.transactions = res;
          console.log(this.budget)
          console.log(this.transactions)
        })
    }
  }
}
