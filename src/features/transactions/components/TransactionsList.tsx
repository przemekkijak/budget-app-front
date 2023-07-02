/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import {Transaction, TransactionStatusEnum} from "@/features/transactions/types";
import { getTransactions} from "@/features/transactions/api/getTransactions";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel
} from "@mui/x-data-grid";
import {css} from "@emotion/react";
import dayjs from 'dayjs';
import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {createTransaction} from "@/features/transactions/api/createTransaction";


export const TransactionsList = ({ budgetId, width, height }: { budgetId: number, width: string, height: string}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  useEffect(() => {
    getTransactions(budgetId).then((transactions) => {
      setTransactions(transactions)
    })
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
    { field: 'paymentDate', headerName: 'Date', width: 100, editable: true, valueFormatter: (params) => dayjs(params.value).format("DD.MM.YYYY")},
    { field: 'recipient', headerName: 'Recipient', width: 250, editable: true },
    { field: 'description', headerName: 'Description', width: 300, editable: true},
    { field: 'amountText', headerName: 'Amount', editable: true },
    { field: 'status', headerName: 'Status', width: 100, editable: true, valueGetter: (params) => getStatusLabel(params.value as number)},
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
                icon={<SaveIcon/>}
                label="Save"
                sx={{
                  color: 'primary.main',
                }}
                onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
                icon={<CancelIcon/>}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
              icon={<EditIcon/>}
              label="Edit"
              className="textPrimary"
              onClick={handleEditClick(id)}
              color="inherit"
          />,
          <GridActionsCellItem
              icon={<DeleteIcon/>}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="inherit"
          />,
        ];
      }}
  ]

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => async () => {
    setRowModesModel({...rowModesModel, [id]: {mode: GridRowModes.View}});
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setTransactions(transactions.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };

  const processRowUpdate = async (updatedRow: Transaction) => {
    setTransactions(transactions.map((row) => (row.id === updatedRow.id ? updatedRow : row)));

    await createTransaction(updatedRow)

    //TODO  onProcessRowUpdateError={handleProcessRowUpdateError} in DataGri

    return updatedRow;
  };

  const handleAddRow = () => {
    let emptyTransaction = getEmptyTransaction();

    setTransactions((transactions: Transaction[]) => [...transactions, emptyTransaction]);
    setRowModesModel((oldModel: GridRowModesModel) => ({
      ...oldModel,
      [0]: { mode: GridRowModes.Edit, fieldToFocus: 'recipient' },
    }));
  }

  const getEmptyTransaction = (): Transaction => {
    return {
      bankAccount: undefined,
      id: 0,
      budgetId: 0,
      bankAccountId: 0,
      recipient: "",
      amount: 0,
      amountText: "",
      status: TransactionStatusEnum.New,
      userId: 0,
      description: "",
      paymentDate: new Date(),
      createDate: new Date(),
      updateDate: new Date(),
      importHash: "",
      isHashDuplicated: false,
      shouldBeAdded: false
    };
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };


  return (
      <div style={{ width: width, height: height, display: 'flex', flexDirection: 'column' }}>

        <div css={css`display: flex; flex-direction: row; justify-content: left`}>
          <Button
              variant="outlined"
              onClick={() => handleAddRow()}
              css={css`
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

          <Button onClick={() => console.log(transactions)}>Log</Button>
        </div>

        {transactions.length > 0 ? (
            <DataGrid
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
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
