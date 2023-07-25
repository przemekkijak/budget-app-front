import {Component, Input, ViewChild} from '@angular/core';
import { TransactionsService } from "../../services/transactions.service";
import { Transaction } from "../../models/transaction";
import { MatTableDataSource } from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  @Input() budgetId: number = 0

  dataSource = new MatTableDataSource<Transaction>();
  columnsToDisplay = ['paymentDate', 'recipient', 'description', 'amount', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private transactionsService: TransactionsService) {}

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
}
