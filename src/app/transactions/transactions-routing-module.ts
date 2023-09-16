import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionsImportComponent} from "./components/transactions-import/transactions-import.component";

const routes: Routes = [
  { path: 'import', component: TransactionsImportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
