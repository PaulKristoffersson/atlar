import { useEffect, useState } from "react";
import { Accounts } from "../../Components/Accounts";
import TopBar from "../../Components/TopBar";
import { Stack, Typography } from "@mui/material";

export interface AccountData {
    id: string;
    name: string;
    alias: string;
    balance: {
      amount: {
        currency: string;
        stringValue: string;
        value: number;
      };
    };
    bank: {
        bic: string;
        id: string;
        name: string;
    }
    affiliation: {
        id: string;
        name: string;
        thirdPartyId: string;
      };
    realBankName? : string;
  }

export const Start = () => {
    const [accounts, setAccounts] = useState<AccountData[]>([]);
    useEffect(() => {
        const username = 'hUfCzFeteKCZgfotD59I';
        const password = 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g';
        const headers = new Headers({
            'Authorization': `Basic ${btoa(username + ":" + password)}`
        });
        fetch('https://api.atlar.com/v1/accounts', { headers })
        .then(response => response.json())
        .then(response => setAccounts(response.items))
        .catch(err => console.error(err));
    },[])
    return (
      <Stack direction='column'>
        <TopBar/>
        <Typography variant='h5' sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        }} >
            Account overview
        </Typography>
        <Accounts accounts={accounts}/>
      </Stack>
    )
}