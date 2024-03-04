import { Sort } from "@mui/icons-material";
import { AccountData } from "../Pages/HomePage/Start";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled, tableCellClasses, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

interface AccountsProps{
    accounts: AccountData[]
}

export const Accounts = ({accounts}: AccountsProps) => {

  const [isReversed, setIsReversed] = useState(false);
  const sortedAccounts = [...accounts].sort((a, b) => a.affiliation.name.localeCompare(b.affiliation.name));
  const handleReverseOrder = () => {
      setIsReversed(!isReversed);
  };
  const displayedAccounts = isReversed ? [...sortedAccounts].reverse() : sortedAccounts;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" paddingTop='10vh'>
      <TableContainer component={Paper} sx={{ width: 1/2, alignSelf: 'center' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Account</StyledTableCell>
              <StyledTableCell align="right">
                Bank 
                <IconButton size="small"
                  edge="start"
                  color="inherit"
                  onClick={handleReverseOrder}
                ><Sort/></IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">Balance</StyledTableCell>
              <StyledTableCell align="right">Currency</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedAccounts.map((account) => (
              <AccountRow 
              key={account.id}
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
    </Box>
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
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row"><Link to={`/${id}`}>{accountName}</Link></TableCell>
        <TableCell align="right">{bankName}</TableCell>
        <TableCell align="right">{balance}</TableCell>
        <TableCell align="right">{currency}</TableCell>
    </TableRow>
    )
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#eeeeee',
    color: theme.palette.common.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
