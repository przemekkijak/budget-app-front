import {Component, Input, ViewChild} from '@angular/core';
import { TransactionsService } from "../../services/transactions.service";
import { Transaction } from "../../models/transaction";
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {DialogService} from "../../../core/services/dialog.service";
import {TransactionStatusLabels} from "../../models/enums/transaction-status.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  @Input() budgetId: number = 0

  transactionStatusLabels = TransactionStatusLabels;
  dataSource = new MatTableDataSource<Transaction>();
  columnsToDisplay = ['paymentDate', 'recipient', 'description', 'bankAccount', 'amount', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private transactionsService: TransactionsService,
    private dialogService: DialogService,
    private router: Router) {}

  ngOnInit() {
    if (this.budgetId !== 0) {
      this.getTransactions(this.budgetId);
    }
  }

  getTransactions(budgetId: number) {
    this.transactionsService.getTransactionsForBudget(budgetId)
      .subscribe((res: Transaction[]) => {
        this.dataSource.data = res;
      });
  }

  openAddTransactionDialog() {
    this.dialogService.openTransactionDialog(this.budgetId, null)?.subscribe((transaction => {
      if (transaction) {
        this.transactionsService.createTransaction(transaction).subscribe(() => {
          this.getTransactions(this.budgetId);
        })
      }
    }))
  }

  openModifyTransactionDialog(transaction: Transaction) {
    this.dialogService.openTransactionDialog(null, transaction)?.subscribe((transaction => {
      if (transaction) {
        console.log(transaction)
        this.transactionsService.updateTransaction(transaction).subscribe(() => {
          this.getTransactions(this.budgetId);
        })
      }
    }))
  }

  navigateToImport() {
    this.router.navigate(['transactions/import']);
  }
}
