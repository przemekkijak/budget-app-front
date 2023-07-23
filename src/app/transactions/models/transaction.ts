export interface Transaction {
  id: number;
  budgetId: number;
  bankAccountId: number;
  //bankACcountModel
  recipient: string;
  amount: number;
  status: number; //TODO Enum
  userId: number;
  description: string;
  paymentDate: Date;
  createDate: Date;
  updateDate: Date;
  importHash: string;
}
