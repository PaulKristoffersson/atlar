import React from "react";
import { AccountData } from "../Pages/HomePage/Start";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box, tableCellClasses, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledTableCell } from "./Accounts";

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
    characteristics?: {
      returned: boolean 
    }
    account: {
      name: string
    }
}

interface TransactionsProps{
    transactions: TransactionData[]
}

export const Transactions = ({transactions}: TransactionsProps) => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" paddingTop='4vh'>
        <TableContainer component={Paper} sx={{ width: 1/2, alignSelf: 'center' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Currency</StyledTableCell>
                <StyledTableCell align="right">Returned</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((t) => (
                <TransactionRow 
                key={t.id}
                date={t.date}
                amount={t.amount.value}
                currency={t.amount.currency}
                returned={t.characteristics?.returned || false}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      );
}

interface TransactionRowProps{
    date: string
    amount: number
    currency: string
    returned: boolean
}

const TransactionRow = ({
    date,
    amount,
    currency,
    returned,
}: TransactionRowProps) => { 

    const paymentCheck = controlPaymentAmount(amount, currency);
    const RowComponent = returned || paymentCheck ? StyledTableRowAlert : TableRow;

    return(
    <RowComponent
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">{date}</TableCell>
        <TableCell align="right">{amount}</TableCell>
        <TableCell align="right">{currency}</TableCell>
        <TableCell align="right">{returned.toString()}</TableCell>
    </RowComponent>
    )
}

const StyledTableRowAlert = styled(TableRow)(() => ({
  backgroundColor: '#ba000d'
}));


const conversionRates = {
  SEK: 0.89, 
  DKK: 0.13, 
  GBP: 1.17, 
  EUR: 1, 
};

const controlPaymentAmount = (amount: number, currency: string): boolean => {

  const paymentAmount = amount * conversionRates[currency as keyof typeof conversionRates];
  if (paymentAmount < -5000) return true

  else return false
};

