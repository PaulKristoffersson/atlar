import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BalanceData } from "./Balance";
import { TransactionData } from "./Transactions";



interface AccountInfoProps{
    balances: BalanceData[];
    transactions: TransactionData[];
}

export const AccountInfo = ({ balances, transactions }: AccountInfoProps) => {

    const [name, setName] = useState('');
    const [value, setValue] = useState(0);
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        if (transactions.length > 0){
            setName(transactions[0].account.name)
        }

        if (balances.length > 0){
            setValue(balances[0].amount.value)
            setCurrency(balances[0].amount.currency)
        }
    },[balances, transactions])

    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 300, 
          border: '2px solid rgba(0, 0, 0, 0.1)', 
          borderRadius: '4px', 
          padding: '16px', 
        }}
      >
        <Stack direction="column" spacing={2}>
            <Typography variant="h4">
            {name}
            </Typography>
            <Stack direction="column">
                <Typography variant="h5">
                    Current Value: {value}
                </Typography>
                <Typography variant="h6">
                    Currency: {currency}
                </Typography>
            </Stack>
        </Stack>
      </Box>
    )
}