import { useEffect, useState } from "react";
import { Budget } from "@/features/budgets/types";
import { getDefaultBudget } from "@/features/budgets/api/getDefaultBudget";
import { TransactionsList } from "@/features/transactions/components/TransactionsList";

export const Dashboard = () => {
    const [budgetId, setBudgetId] = useState<number>()

    const getBudget = async () => {
        const response: Budget = await getDefaultBudget();
        return response;
    }

    useEffect(() => {
        getBudget().then((budget) => setBudgetId(budget.id))
    }, [])

    return (

      <div className="">
          <p>budget page</p>
          {budgetId != null ? <TransactionsList budgetId={budgetId}/> : null}
      </div>
    )
}
