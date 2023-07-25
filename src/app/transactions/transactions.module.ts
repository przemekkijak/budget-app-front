import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
    declarations: [
      TransactionsListComponent
    ],
    exports: [
      TransactionsListComponent
    ],
    imports: [
      CommonModule,
      MatTableModule,
      MatPaginatorModule
    ]
})
export class TransactionsModule { }
