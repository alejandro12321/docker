import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Docker App
        </Typography>

        <Box display="flex" gap={2}>
          {['', 'discover', 'about'].map((route, index) => (
            <Button
              key={index}
              color="inherit"
              sx={{
                border: 'none',
                textTransform: 'none',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                '&:focus': { outline: 'none' },
                '&:active': { boxShadow: 'none', backgroundColor: 'inherit' },
              }}
              onClick={() => handleNavigation(route)}
            >
              {route === '' ? 'Home' : route.charAt(0).toUpperCase() + route.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
