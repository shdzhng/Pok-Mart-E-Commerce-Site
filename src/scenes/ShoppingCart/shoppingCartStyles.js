import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button, Box, Paper } from '@mui/material';
import { createBreakpoints } from '@mui/system';
import { createTheme } from '@mui/material';

const breakpoints = createBreakpoints({});

const shoppingCartTheme = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          backgroundColor: 'yellow',
          border: '1px solid black',
        },
      },
    },
  },
});

const Item = styled(Paper)({
  backgroundColor: 'green !important',
  padding: 2,
  textAlign: 'center',
});

const StyledContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflowY: 'scroll',
  position: 'fixed',
  top: 70,
  alignItems: 'strech',
  maxHeight: '90vh',
});

export { StyledContainer, Item, shoppingCartTheme };
