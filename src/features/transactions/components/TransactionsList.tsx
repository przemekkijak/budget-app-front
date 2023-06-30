import { useEffect, useState } from "react";
import { Transaction } from "@/features/transactions/types";
import { getTransactions} from "@/features/transactions/api/getTransactions";

export const TransactionsList = ({ budgetId }: { budgetId: number }) => {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    getTransactions(budgetId).then((transactions) => setTransactions(transactions))
  })

  return (
    <div>
      <p>transactions page</p>
      <p>{transactions?.length}</p>
    </div>
  )
}