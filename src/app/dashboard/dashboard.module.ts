import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing-module';
import {TransactionsModule} from "../transactions/transactions.module";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
      CommonModule,
      DashboardRoutingModule,
      TransactionsModule,
      MatPaginatorModule
    ]
})
export class DashboardModule { }
