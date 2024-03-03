import * as React from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

interface BankBoxProps {
    bankName: string; // Expecting a bankName prop now
  }
  
  const BankBox: React.FC<BankBoxProps> = ({ bankName }) => {
    return (
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: 'white',
              dark: grey[500],
            },
          },
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 2,
            borderColor: 'black',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          <Typography>{bankName}</Typography>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default BankBox;