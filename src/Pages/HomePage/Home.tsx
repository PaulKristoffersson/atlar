import { Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AccountBalance from '../Balance/AccountBalance'; // Adjust the relative path as necessary
import AccountList from '../Balance/AccountList';
import TopBar from '../../Components/TopBar';
import axios from 'axios';

// The data that is relevant in the response. 
export interface AccountData {
  id: string;
  name: string;
  alias: string;
  balance: {
    amount: {
      currency: string;
      stringValue: string;
    };
  };
  bank: {
      bic: string;
      id: string;
      name: string;
  }
  realBankName? : string;
}

 function HomePage() {

    const [accounts, setAccounts] = useState<AccountData[]>([]);
    const [uniqueBankNames, setUniqueBankNames] = useState<string[]>([]);
    const [selectedBank, setSelectedBank] = useState<string | undefined>(undefined); 
    useEffect(() => {
        const fetchData = async () => {
        const apiUrl = 'https://api.atlar.com/v1/accounts';
        const auth = {
            username: 'hUfCzFeteKCZgfotD59I',
            password: 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g',
        };
        try {
            const response = await axios.get(apiUrl, { auth });
            const modifiedAccounts = response.data.items.map((account: AccountData) => ({
                ...account,
                realBankName: account.name.split(' ')[0], // Extract the first word from the name
              }));
              setAccounts(modifiedAccounts);

              const bankNames = new Set(accounts.map((account ) => account.realBankName) as string[]);
              const bankNamesArray = Array.from(bankNames) as string[];
              setUniqueBankNames(bankNamesArray);
              console.log(bankNamesArray);
              if (bankNamesArray.length > 0) {
                setSelectedBank(bankNamesArray[0]);
              }
        } catch (error) {
            console.error("There was an error fetching the accounts:", error);
        } finally {
        }
        };
        fetchData();
    }, [accounts]);

    const handleBankChange = (event: SelectChangeEvent) => {
      setSelectedBank(event.target.value as string);
    };

  return (
    <Stack direction='column'>
      <TopBar/>
      { selectedBank ? (
        <Container maxWidth="sm"> {/* This will set the max-width to the "sm" breakpoint */}
          <Select
            labelId="bank-select-label"
            id="bank-select"
            value={selectedBank}
            label="Bank"
            onChange={handleBankChange}
            sx={{ width: '100%', maxWidth: 360 }} // You can set the width here
          >
            {uniqueBankNames.map((bankName) => (
              <MenuItem key={bankName} value={bankName}>
                {bankName}
              </MenuItem>
            ))}
          </Select>
          <AccountList accountData={accounts.filter(account => account.name.includes(selectedBank))} />
        </Container>
      ) : (
        <div>No data available.</div>
      )}
    </Stack>
  );
}

export default HomePage;