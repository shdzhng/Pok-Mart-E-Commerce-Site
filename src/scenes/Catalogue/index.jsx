import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Button,
  Typography,
  TextField,
  Autocomplete,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ItemCard from '../../components/ItemCard/ItemCard';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StyledContainer } from '../../scenes/Catalogue/catalogueStyles';

function Catalogue() {
  const items = useSelector((state) => state.categoryItems.items);

  return (
    <Box>
      <StyledContainer>
        {items.map((item) => (
          <ItemCard item={item} key={item.name} />
        ))}
      </StyledContainer>
    </Box>
  );
}

export default Catalogue;
