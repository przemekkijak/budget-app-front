import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TransactionDialogComponent } from './components/transaction-dialog/transaction-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {TransactionsImportComponent} from "./components/transactions-import/transactions-import.component";
import {TransactionsRoutingModule} from "./transactions-routing-module";
import {MatStepperModule} from "@angular/material/stepper";
import {TransactionsChartComponent} from "./components/transactions-chart/transactions-chart.component";
import {NgChartsModule} from "ng2-charts";


@NgModule({
    declarations: [
      TransactionsListComponent,
      TransactionDialogComponent,
      TransactionsImportComponent,
      TransactionsChartComponent
    ],
  exports: [
    TransactionsListComponent,
    TransactionsChartComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TransactionsRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class TransactionsModule { }
