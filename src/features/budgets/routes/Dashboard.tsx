/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { Budget } from "@/features/budgets/types";
import { getDefaultBudget } from "@/features/budgets/api/getDefaultBudget";
import { TransactionsList } from "@/features/transactions/components/TransactionsList";
import {css} from "@emotion/react";

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

      <div>
          <div css={css`
            border: 1px solid green;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          `}>
              {budgetId != null ?
                  <TransactionsList budgetId={budgetId} width={'50vw'}/> : null}
          </div>
      </div>
    )
}
