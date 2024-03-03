import { LineChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransactionData, Transactions } from "../../Components/Transactions";

interface Balance{
    timestamp: string
    localDate: string
    amount: {
        curreny: string
        value: number
        stringValue: string
    }
}



export const Account = () => {
    const location = useLocation();
    const [balances, setBalances] = useState<Balance[]>([]);
    const [transactions, setTransactions] = useState<TransactionData[]>([])
    useEffect( () => {
        const username = 'hUfCzFeteKCZgfotD59I';
        const password = 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g';
        const headers = new Headers({
            'Authorization': `Basic ${btoa(username + ":" + password)}`
        });
        fetch(`https://api.atlar.com/v1beta/accounts/${location.pathname.substring(1)}/balances?limit=20`, { headers })
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
    <Transactions transactions={transactions}/>
    );
          
    
}