import { Transaction } from "@/features/transactions/types";
import { axios } from "@/lib/axios";

export const getTransactions = (budgetId: number): Promise<Transaction[]> => {
  return axios.get(`/transactions/${budgetId}`)
}