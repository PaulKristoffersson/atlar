import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static"
        sx={{ 
            backgroundColor: 'white', 
            color: 'black',
            border: '1px solid black' 
          }}
        >
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <Link to={`/`}><Home /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Atlar
          </Typography>
          <Avatar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}