import React from "react";
import { AccountData } from "../Pages/HomePage/Start";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface AccountsProps{
    accounts: AccountData[]
}

export const Accounts = ({accounts}: AccountsProps) => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Account</TableCell>
                <TableCell align="right">Bank</TableCell>
                <TableCell align="right">Balance</TableCell>
                <TableCell align="right">Currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <AccountRow 
                bankName={account.affiliation.name}
                accountName={account.name}
                balance={account.balance.amount.value}
                currency={account.balance.amount.currency}
                id={account.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

interface AccountRowProps{
    bankName: string
    accountName: string
    balance: number
    currency: string
    id: string
}

const AccountRow = ({
    bankName,
    accountName,
    balance,
    currency,
    id,
}: AccountRowProps) => { 

    return(
    <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">{accountName}</TableCell>
        <TableCell align="right">{bankName}</TableCell>
        <TableCell align="right">{balance}</TableCell>
        <TableCell align="right">{currency}</TableCell>
    </TableRow>
    )
}