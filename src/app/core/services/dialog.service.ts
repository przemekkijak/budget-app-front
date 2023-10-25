import {MatDialog} from "@angular/material/dialog";
import {TransactionDialogComponent} from "../../transactions/components/transaction-dialog/transaction-dialog.component";
import {Injectable} from "@angular/core";
import {Transaction} from "../../transactions/models/transaction";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  openTransactionDialog(budgetId: number | null, transaction: Transaction | null): Observable<Transaction> | undefined {
    const dialogRef = this.dialog.open(TransactionDialogComponent, {
      width: '30vw',
      height: '65vh',
      data: {
        budgetId: budgetId,
        transaction: transaction
      }
      }
    )

    return dialogRef.afterClosed()
  }
}
