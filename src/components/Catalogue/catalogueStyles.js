import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button, Box, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

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

const catalogueTheme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCard: {
      variants: [
        {
          props: {
            variant: 'grayMode',
          },
          style: {
            backgroundColor: colors.gray2,
          },
        },
      ],
      styleOverrides: {
        root: {
          width: '20%',
          marginLeft: 8,
          marginRight: 8,
          padding: 2,
          marginBottom: 1,
          marginTop: 10,
          [breakpoints.down('xl')]: {
            width: '25%',
          },
          [breakpoints.down('lg')]: {
            width: '30%',
          },
          [breakpoints.down('md')]: {
            width: '40%',
          },
          [breakpoints.down('sm')]: {
            width: '70%',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'title',
          },
          style: {
            fontSize: '1.5em',
            color: colors.red,
            fontWeight: 600,
            textAlign: 'center',
            [breakpoints.down('lg')]: {},
            [breakpoints.down('md')]: {
              fontSize: '1.25em',
            },
            [breakpoints.down('sm')]: {
              fontSize: '1em',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontSize: '1em',
          color: colors.blue3,
          [breakpoints.down('lg')]: {},
          [breakpoints.down('md')]: {
            fontSize: '0.9em',
          },
          [breakpoints.down('sm')]: {
            fontSize: '0.8em',
          },
        },
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

export { catalogueTheme, StyledContainer };
