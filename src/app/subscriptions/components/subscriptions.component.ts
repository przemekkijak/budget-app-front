import { Component, OnInit } from '@angular/core';

export interface Subscription {
  name: string;
  amount: number;
  subscriptionSince: Date;
  paymentDay: number; // Dzień miesiąca, w którym następuje płatność
  paymentDate?: Date;
  totalSpent?: number;
}

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount', 'subscriptionSince', 'paymentDate', 'totalSpent'];
  subscriptions: Subscription[];

  constructor() {
    this.subscriptions = [
      {name: 'Netflix', amount: 60, subscriptionSince: new Date(2021, 0, 1), paymentDay: 10},
      {name: 'Spotify', amount: 10, subscriptionSince: new Date(2021, 0, 1), paymentDay: 7},
      {name: 'HBO Max', amount: 15, subscriptionSince: new Date(2022, 5, 1), paymentDay: 5},
      {name: 'Disney+', amount: 130, subscriptionSince: new Date(2022, 7, 1), paymentDay: 14},
    ];

    this.calculateTotalSpent();
    this.calculateNextPaymentDate();
  }

  ngOnInit(): void {
  }

  private calculateTotalSpent(): void {
    const currentDate = new Date();
    this.subscriptions.forEach(sub => {
      const months = this.monthDiff(sub.subscriptionSince, currentDate);
      sub.totalSpent = months * sub.amount;
    });
  }

  private monthDiff(d1: Date, d2: Date): number {
    let months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  private calculateNextPaymentDate(): void {
    const currentDate = new Date();
    this.subscriptions.forEach(sub => {
      const paymentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), sub.paymentDay);
      if (paymentDate < currentDate) {
        // Jeśli data płatności już minęła, ustaw datę na następny miesiąc
        paymentDate.setMonth(paymentDate.getMonth() + 1);
      }
      sub.paymentDate = paymentDate;
    });
  }
}
