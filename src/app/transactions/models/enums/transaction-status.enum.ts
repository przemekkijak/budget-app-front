export enum TransactionStatusEnum {
  New = 0,
  Completed = 1,
  Scheduled = 2,
}

export const TransactionStatusLabels: { [key: number]: string } = {
  [TransactionStatusEnum.New]: 'New',
  [TransactionStatusEnum.Completed]: 'Completed',
  [TransactionStatusEnum.Scheduled]: 'Scheduled',
};
