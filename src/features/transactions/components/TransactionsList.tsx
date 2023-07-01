/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import {Transaction, TransactionStatusEnum} from "@/features/transactions/types";
import { getTransactions} from "@/features/transactions/api/getTransactions";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {css} from "@emotion/react";
import dayjs from 'dayjs';
import {Button} from "@mui/material";


export const TransactionsList = ({ budgetId, width, height }: { budgetId: number, width: string, height: string}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getTransactions(budgetId).then((transactions) => setTransactions(transactions))
  }, [budgetId])

  const getStatusLabel = (value: number): string => {
    switch (value) {
      case TransactionStatusEnum.New:
        return 'New';
      case TransactionStatusEnum.Scheduled:
        return 'Scheduled';
      case TransactionStatusEnum.Completed:
        return 'Completed';
      default:
        return '';
    }
  };

  const gridColumns: GridColDef[] = [
    { field: 'paymentDate', headerName: 'Date', width: 100, valueFormatter: (params) => dayjs(params.value).format("DD.MM.YYYY")},
    { field: 'recipient', headerName: 'Recipient', width: 250 },
    { field: 'description', headerName: 'Description', width: 300},
    { field: 'amountText', headerName: 'Amount'},
    { field: 'status', headerName: 'Status', width: 100, valueGetter: (params) => getStatusLabel(params.value as number)}
  ]


  return (
      <div style={{ width: width, height: height, display: 'flex', flexDirection: 'column' }}>

        <div css={css`display: flex; flex-direction: row; justify-content: left`}>
          <Button variant="outlined" css={css`
        position: relative;
        top: 0;
        left: 0;
        width: 15%;
        margin-bottom: 2%;
        margin-right: 1%;`}>Add</Button>

          <Button variant="outlined" css={css`
        position: relative;
        top: 0;
        left: 0;
        width: 15%;
        margin-bottom: 2%;`}>Import</Button>
        </div>

        {transactions.length > 0 ? (
            <DataGrid
                autoHeight
                key={budgetId}
                columns={gridColumns}
                rows={transactions}
                css={css`width: 100%; height: 100%`}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 8,
                    },
                  },
                  sorting: {
                    sortModel: [{
                      field: 'paymentDate',
                      sort: 'desc',
                    }],
                  },
                }}
            />
        ) : null}
      </div>

  )
}
