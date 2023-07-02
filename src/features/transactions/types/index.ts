import { BankAccount } from "@/features/bankAccounts/types";

export enum TransactionStatusEnum {
  New = 0,
  Completed = 1,
  Scheduled = 2
}

export type Transaction = {
  id: number;
  budgetId: number;
  bankAccountId: number;
  bankAccount?: BankAccount;
  recipient: string;
  amount: number;
  amountText: string;
  status: TransactionStatusEnum;
  userId: number;
  description: string;
  paymentDate: Date;
  createDate: Date;
  updateDate: Date;
  importHash: string;
  isHashDuplicated: boolean;
  shouldBeAdded: boolean;
}
