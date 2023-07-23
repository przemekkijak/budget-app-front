import { Component } from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  constructor(private transactionsService: TransactionsService) {

  }


}
