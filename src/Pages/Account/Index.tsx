import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransactionData, Transactions } from "../../Components/Transactions";
import { Grid, Stack } from "@mui/material";
import { Balance, BalanceData } from "../../Components/Balance";
import TopBar from "../../Components/TopBar";
import { AccountInfo } from "../../Components/AccountInfo";


export const Account = () => {
    const location = useLocation();
    const [balances, setBalances] = useState<BalanceData[]>([]);
    const [transactions, setTransactions] = useState<TransactionData[]>([])
    useEffect( () => {
        const username = 'hUfCzFeteKCZgfotD59I';
        const password = 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g';
        const headers = new Headers({
            'Authorization': `Basic ${btoa(username + ":" + password)}`
        });
        fetch(`https://api.atlar.com/v1beta/accounts/${location.pathname.substring(1)}/balances`, { headers })
        .then(response => response.json())
        .then(response => setBalances(response.items))
        .catch(err => console.error(err));

    }, []);
    
    useEffect( () => {
        const username = 'hUfCzFeteKCZgfotD59I';
        const password = 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g';
        const headers = new Headers({
            'Authorization': `Basic ${btoa(username + ":" + password)}`
        });
        fetch(`https://api.atlar.com/v1/transactions?accountId=${location.pathname.substring(1)}`, { headers })
        .then(response => response.json())
        .then(response => setTransactions(response.items))
        .catch(err => console.error(err));
    },[])
    return (
    <Stack direction='column' spacing={2}>
            <TopBar/>
        <Grid container>
            <Grid item xs={2}/>
            <Grid item xs={3} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: '2px solid rgba(0, 0, 0, 0.1)', 
                borderLeft: '2px solid rgba(0, 0, 0, 0.1)', 
                borderBottom: '2px solid rgba(0, 0, 0, 0.1)', 
                boxSizing: 'border-box', 
            }}>
                <AccountInfo balances={balances} transactions={transactions}/>            
            </Grid>
            <Grid item xs={5} sx={{
                borderTop: '2px solid rgba(0, 0, 0, 0.1)', // Transparent grey border
                borderRight: '2px solid rgba(0, 0, 0, 0.1)', // Transparent grey border
                borderBottom: '2px solid rgba(0, 0, 0, 0.1)', // Transparent grey border
                padding: 2, // Space inside the border
                boxSizing: 'border-box', // Makes sure padding doesn't affect the width
            }}>
            <Balance balances={balances}/>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={12}>
                <Transactions transactions={transactions}/>
            </Grid>
        </Grid>
    </Stack>
    );
          
    
}