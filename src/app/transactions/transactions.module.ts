import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TransactionDialogComponent } from './components/transaction-dialog/transaction-dialog.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
      TransactionsListComponent,
      TransactionDialogComponent
    ],
    exports: [
      TransactionsListComponent
    ],
    imports: [
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      FormsModule,
      MatButtonModule,
    ]
})
export class TransactionsModule { }
