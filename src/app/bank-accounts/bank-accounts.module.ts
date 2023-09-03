import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountSummaryComponent } from './components/bank-account-summary/bank-account-summary.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    BankAccountSummaryComponent
  ],
  exports: [
    BankAccountSummaryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class BankAccountsModule { }
