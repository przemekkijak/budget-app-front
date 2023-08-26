import {Component, Input} from '@angular/core';
import {BankAccountsService} from "../../services/bank-accounts.service";
import {BankAccount} from "../../models/bankAccount";

@Component({
  selector: 'app-bank-account-summary',
  templateUrl: './bank-account-summary.component.html',
  styleUrls: ['./bank-account-summary.component.scss']
})
export class BankAccountSummaryComponent {
  @Input() budgetId: number = 0;

  bankAccounts: BankAccount[] | undefined;

  constructor(private bankAccountService: BankAccountsService) {

  }

  ngOnInit() {
    if (this.budgetId !== 0) {
      this.getBankAccounts();
    }
  }

  getBankAccounts() {
    this.bankAccountService.getBankAccountsForBudget(this.budgetId)
      .subscribe((res: BankAccount[]) => {
        this.bankAccounts = res;
      });
  }
}
