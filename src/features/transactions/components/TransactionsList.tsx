import { useEffect, useState } from "react";
import { Transaction } from "@/features/transactions/types";
import { getTransactions} from "@/features/transactions/api/getTransactions";
import { GridColDef } from "@mui/x-data-grid";

export const TransactionsList = ({ budgetId }: { budgetId: number }) => {
  const [transactions, setTransactions] = useState<Transaction[]>();

  useEffect(() => {
    getTransactions(budgetId).then((transactions) => setTransactions(transactions))
  })

  const gridColumns: GridColDef[] = [
    { field: 'createDate', headerName: 'Date' },
    { field: 'amount', headerName: 'Amount' },
  ]

  return (
    <div>
      <p>transactions page</p>
      <p>{transactions?.length}</p>
    </div>
  )
}