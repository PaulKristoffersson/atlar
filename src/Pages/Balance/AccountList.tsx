import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { AccountData } from "../HomePage/Home"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Account name',
      width: 150,
    },
    {
      field: 'value',
      headerName: 'Value',
      width: 150,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      type: 'number',
      width: 110,
    },
  ];
  
interface AccountListProps {
accountData: AccountData[];
}
  

const AccountList: React.FC<AccountListProps> = ({ accountData }) => {
    const rows = accountData.map((account) => ({
        id: account.id, // Adjusted for consistency with DataGrid expectations
        name: account.name,
        value: account.balance.amount.stringValue,
        currency: account.balance.amount.currency,
      }));

return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </Box>
  );

}

export default AccountList;

