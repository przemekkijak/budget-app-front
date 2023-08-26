import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountSummaryComponent } from './components/bank-account-summary/bank-account-summary.component';



@NgModule({
  declarations: [
    BankAccountSummaryComponent
  ],
  exports: [
    BankAccountSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BankAccountsModule { }
