import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const catalogueTheme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTypography: {
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
