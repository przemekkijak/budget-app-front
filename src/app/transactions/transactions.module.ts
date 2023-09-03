import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TransactionDialogComponent } from './components/transaction-dialog/transaction-dialog.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


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
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ]
})
export class TransactionsModule { }
