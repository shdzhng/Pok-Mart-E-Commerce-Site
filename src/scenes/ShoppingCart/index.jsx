import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StyledContainer, Item, shoppingCartTheme } from './shoppingCartStyles';
import { ThemeProvider } from '@mui/material';

function ShoppingCart() {
  const { userData, addToShoppingCart, removeFromShoppingCart } = useAuth();
  const { favorites, shoppingCart } = userData;

  return (
    <ThemeProvider theme={shoppingCartTheme}>
      <StyledContainer
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflowY: 'scroll',
          position: 'fixed',
          marginLeft: 1,
          top: 70,
          alignItems: 'strech',
          width: '100vw',
          maxHeight: '90vh',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Item>Orders</Item>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <Item>Favorites/Save for Later</Item>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
            <Item>Order Summary</Item>
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default ShoppingCart;
