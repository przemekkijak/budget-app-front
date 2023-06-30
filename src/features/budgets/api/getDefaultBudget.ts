import { Budget } from "@/features/budgets/types";
import { axios } from "@/lib/axios";

export const getDefaultBudget = (): Promise<Budget> => {
  return axios.get('/budgets')
}