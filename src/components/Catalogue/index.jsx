import React, {useState, useEffect} from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';
import { ThemeProvider } from '@mui/material';
import { catalogueTheme } from './catalogueStyles';

export default function CatalogueGrid() {
  const items = useSelector(state=>state.items.items)

  return (
    <ThemeProvider theme={catalogueTheme}>
      <Box sx={{ position: 'fixed', top: 70 }}>
        {items?.length > 0 ? (
          items.map((item) => <ItemCard item={item} key={item.name} />)
        ) : (
          <Typography>no items yet</Typography>
        )}
      </Box>
    </ThemeProvider>
  );
}
