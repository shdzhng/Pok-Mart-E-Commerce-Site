import { colors } from '../../constants/colors';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const itemCardTheme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          width: 2200,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
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
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            position: 'relative',
            marginTop: '1em',
            fontSize: '1em',
            backgroundColor: `${colors.red}90`,
            '&:hover': {
              backgroundColor: `${colors.red}`,
            },
            '&:active': {
              backgroundColor: `${colors.red}`,
            },
            [breakpoints.down('md')]: {
              fontSize: '0.7em',
            },
            [breakpoints.down('sm')]: {
              fontSize: '0.5em',
              padding: '0.7em',
            },
          },
        },
      ],
      styleOverrides: {
        endIcon: {
          fontSize: 20,
          [breakpoints.down('md')]: {
            fontSize: '0.7em',
          },
          [breakpoints.down('sm')]: {
            fontSize: '0.5em',
          },
        },
      },
    },
  },
});

export { itemCardTheme };
