import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Transaction} from "../../models/transaction";
import {TransactionStatusLabels} from "../../models/enums/transaction-status.enum";
import {BankAccount} from "../../../bank-accounts/models/bankAccount";
import {BankAccountsService} from "../../../bank-accounts/services/bank-accounts.service";


@Component({
  selector: 'app-add-transaction',
  templateUrl: './transaction-dialog.component.html',
  styleUrls: ['./transaction-dialog.component.css'],
})
export class TransactionDialogComponent {

  transaction: Transaction = {
    id: 0,
    budgetId: 0,
    bankAccountId: 0,
    bankAccount: null,
    recipient: '',
    amount: 0,
    status: 0,
    userId: 0,
    description: '',
    paymentDate: new Date(),
    createDate: new Date(),
    updateDate: new Date(),
    importHash: '',
  };

  transactionStatuses = Object.keys(TransactionStatusLabels).map((key) => Number(key));
  transactionStatusLabels = TransactionStatusLabels;

  budgetBankAccounts: BankAccount[] = [];

  constructor(
    public dialogRef: MatDialogRef<TransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      budgetId: number
      transaction: Transaction | null
    },
    private bankAccountsService: BankAccountsService) {
  }

  ngOnInit() {

    if (this.data.transaction) {
      this.transaction = this.data.transaction;
    } else {
      this.transaction.budgetId = this.data.budgetId;
    }

    this.bankAccountsService.getBankAccountsForBudget(this.transaction.budgetId)
      .subscribe((res: BankAccount[]) => {
        this.budgetBankAccounts = res;
      })

  }

  onSubmit(): void {
    // Here, you can handle the form submission and emit the transaction data.
    this.dialogRef.close(this.transaction);
  }

  onCancel(): void {
    // Here, you can handle the form cancellation and close the dialog without returning any data.
    this.dialogRef.close();
  }
}
