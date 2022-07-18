import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const catalogueTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
    MuiGrid: {
      styleOverrides: {
        container: {},
        item: {},
      },
    },
  },
});

export { catalogueTheme };
