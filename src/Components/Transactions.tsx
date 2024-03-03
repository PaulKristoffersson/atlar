import React from "react";
import { AccountData } from "../Pages/HomePage/Start";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Link } from "react-router-dom";

export interface TransactionData{
    id: string
    date: string
    amount: {
        currency: string
        stringValue: string
        value: number
    }
    counterparty: {
        name: string
    }
    returned: boolean
}

interface TransactionsProps{
    transactions: TransactionData[]
}

export const Transactions = ({transactions}: TransactionsProps) => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Currency</TableCell>
                <TableCell align="right">Counterparty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((t) => (
                <TransactionRow 
                date={t.date}
                amount={t.amount.stringValue}
                currency={t.amount.currency}
                counterparty={t.counterparty.name}
                id={t.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

interface TransactionRowProps{
    date: string
    amount: string
    currency: string
    counterparty: string
    id: string
}

const TransactionRow = ({
    date,
    amount,
    currency,
    counterparty,
    id,
}: TransactionRowProps) => { 

    return(
    <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">{date}</TableCell>
        <TableCell align="right">{amount}</TableCell>
        <TableCell align="right">{currency}</TableCell>
        <TableCell align="right">{counterparty}</TableCell>
    </TableRow>
    )
}