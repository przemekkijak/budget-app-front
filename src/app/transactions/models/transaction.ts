import {BankAccount} from "../../bank-accounts/models/bankAccount";

export interface Transaction {
  id: number;
  budgetId: number;
  bankAccountId: number;
  bankAccount: BankAccount | null;
  recipient: string;
  amount: number;
  status: number;
  userId: number;
  description: string;
  paymentDate: Date;
  createDate: Date;
  updateDate: Date;
  importHash: string;
}
