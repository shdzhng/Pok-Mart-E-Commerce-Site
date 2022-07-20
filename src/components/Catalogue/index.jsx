import React, {useState, useEffect} from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { catalogueTheme, StyledContainer } from './catalogueStyles';

export default function CatalogueGrid() {
  const items = useSelector((state) => state.categoryItems.items);

  return (
    <ThemeProvider theme={catalogueTheme}>
      <CssBaseline />
      <Box>
        <StyledContainer>
          {items?.length > 0 ? (
            items.map((item) => <ItemCard item={item} key={item.name} />)
          ) : (
            <Typography>no items yet</Typography>
          )}
        </StyledContainer>
      </Box>
    </ThemeProvider>
  );
}
