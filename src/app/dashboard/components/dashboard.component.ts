import {Component, OnInit} from '@angular/core';
import {BudgetsService} from "../../budgets/services/budgets.service";
import {Budget} from "../../budgets/models/budget";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public budget: Budget | null = null;

  constructor(private budgetService: BudgetsService) {
  }

  ngOnInit() {
    this.getDefaultBudget().subscribe((budget) => {
      this.budget = budget;
    })
  }

  getDefaultBudget() {
    return this.budgetService.getBudget();
  }
}
