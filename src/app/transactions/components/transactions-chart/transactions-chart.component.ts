import {Component, Input} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {Transaction} from "../../models/transaction";
import {ChartData, ChartOptions} from "chart.js";

@Component({
  selector: 'app-transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.scss']
})

export class TransactionsChartComponent {
  @Input() budgetId: number = 0
  maxSpending: number = 0;
  transactions: Transaction[] = [];

  salesData: ChartData<'bar', number[]> | undefined;

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Dzienne wydatki',
      },
    },
    scales: {
      x: {
        ticks: {
          display: true, // show the X-axis labels
          // Additional configuration if needed
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
      }
    }
  };



  constructor(private transactionsService: TransactionsService) {

  }

  ngOnInit() {

    if (this.budgetId !== 0) {
      this.getTransactions(this.budgetId)
    }
  }

  getTransactions(budgetId: number) {
    this.transactionsService.getTransactionsForBudget(budgetId)
      .subscribe((res: Transaction[]) => {
        this.transactions = res;
        this.salesData = this.transformTransactionsToChartData();

        // Calculate the max spending value from the data and double it
        if (this.salesData && this.salesData.datasets && this.salesData.datasets[0].data) {
          this.maxSpending = Math.max(...this.salesData.datasets[0].data) * 2;

          // Adjust the chartOptions for y-axis
          this.chartOptions = {
            ...this.chartOptions,
            scales: {
              ...this.chartOptions.scales,
              y: {
                ...this.chartOptions.scales?.['y'],
                max: this.maxSpending
              }
            }
          };
        }
      });
  }

  transformTransactionsToChartData(): ChartData<'bar'> {
    // Group transactions by day but consider only negative amounts
    const groupedByDay = this.transactions.reduce((acc, transaction) => {
      // Only consider negative transactions
      if (transaction.amount < 0) {
        const date = new Date(transaction.paymentDate);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`; // Format date to DD.MM
        if (!acc[formattedDate]) {
          acc[formattedDate] = 0;
        }
        acc[formattedDate] += transaction.amount;
      }
      return acc;
    }, {} as { [key: string]: number });

    // Sort the dates to ensure the oldest is on the left
    const sortedDates = Object.keys(groupedByDay).sort((a, b) => new Date('2023-' + a.split('.').reverse().join('-')).getTime() - new Date('2023-' + b.split('.').reverse().join('-')).getTime()); // Hardcoded year for sorting

    const labels = sortedDates;
    const data = sortedDates.map(date => Math.abs(groupedByDay[date]));

    const datasets = [{
      label: 'Amount',
      data: data,
      backgroundColor: 'rgba(211,46,46,0.2)',
      borderColor: 'rgb(136,29,29)',
      borderWidth: 1
    }];

    return { labels, datasets };
  }





}
