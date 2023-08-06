export interface BankAccount {
  id: number;
  name: string;
  userId: number;
  budgetId: number;
  numberSuffix: number;
  isDefault: boolean;
  amount: number;
}
