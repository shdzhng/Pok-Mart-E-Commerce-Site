import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const NavbarLink = styled(Link)`
  color: ${colors.white};
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

const NavbarMenuLink = styled(Link)`
  color: ${colors.blue3};
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

const searchTheme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          border: `2px solid ${colors.white}`,
          paddingLeft: '1em',
          borderRadius: '10px',
          width: '40%',
          backgroundColor: `${colors.red}`,
        },
        input: {
          color: colors.white,
          fontWeight: 500,
        },
      },
    },
  },
});

const modalTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.white,
          '&.Mui-focused': {
            color: colors.white,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '100%',
        },
        input: {
          paddingLeft: '0.25em',
          color: colors.white,
          fontWeight: 700,
          borderRadius: 5,
          '&:focus-visible': {
            backgroundColor: `${colors.white}80`,
          },
          '&:-webkit-autofill': {
            WebkitTextFillColor: colors.blue3,
            WebkitBoxShadow: `0 0 0 1000px ${colors.white}00 inset`,
          },
        },
        underline: {
          '&:before': {
            borderBottom: `2px solid ${colors.white}`,
          },
          '&:after': {
            borderBottom: `2px solid ${colors.blue2}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        marginNormal: false,
        root: {
          fontSize: '1rem',
          marginTop: '1em',
          padding: '0.2em 0 0.2em 0 ',
          fontWeight: '900',
          color: colors.white,
          backgroundColor: colors.blue2,
          '&:hover': { backgroundColor: colors.blue3 },
        },
      },
    },
  },
});

export { NavbarMenuLink, modalTheme, searchTheme, NavbarLink };
