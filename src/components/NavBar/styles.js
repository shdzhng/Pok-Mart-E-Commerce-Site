import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
const breakpoints = createBreakpoints({});

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

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 200, sm: 500 },
  display: 'flex',
  bgcolor: colors.white,
  border: `2px solid ${colors.pink}`,
  boxShadow: 24,
  flexDirection: 'column',
  p: 4,
};

const logoBoxStyle = { display: 'flex', justifyContent: 'center', mb: 2 };

const modalTheme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        asterisk: {
          '&.Mui-error': {
            color: colors.blue3,
          },
        },
        root: {
          color: colors.blue3,
          '&.Mui-focused': {
            color: colors.blue3,
          },
          '&.Mui-error': {
            color: colors.blue3,
          },
          [breakpoints.down('sm')]: {
            fontSize: '0.75em',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          width: '100%',
          [breakpoints.down('sm')]: {
            fontSize: '0.75em',
          },
        },
        input: {
          paddingLeft: '0.25em',
          color: 'black',
          fontWeight: 700,
          borderRadius: 5,
          '&:focus-visible': {
            backgroundColor: `${colors.blue2}20`,
          },
          '&:-webkit-autofill': {
            WebkitTextFillColor: `black`,
            WebkitBoxShadow: `0 0 0 1000px ${colors.blue2}20 inset`,
          },
        },
        underline: {
          '&:before': {
            borderBottom: `2px solid ${colors.blue3}`,
          },
          '&:after': {
            borderBottom: `2px solid ${colors.blue4}`,
          },
          '&.Mui-error': {
            borderBottom: `2px solid ${colors.white}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        marginNormal: false,
        root: {
          fontSize: '1em',
          marginTop: '1em',
          padding: '0.2em 0 0.2em 0 ',
          fontWeight: '900',
          color: colors.white,
          backgroundColor: colors.blue2,
          '&:hover': { backgroundColor: colors.blue3 },
          [breakpoints.down('sm')]: {
            fontSize: '0.75em',
          },
        },
      },
    },
  },
});

export {
  NavbarMenuLink,
  logoBoxStyle,
  boxStyle,
  modalTheme,
  searchTheme,
  NavbarLink,
};
