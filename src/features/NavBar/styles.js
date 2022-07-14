import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { TextField, Button } from '@mui/material';

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

const buttonSxStyle = {
  mt: 2,
  py: 0.2,
  bgcolor: colors.green1,
  fontWeight: 900,
  color: colors.white,
};

const formSxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: colors.red,
  border: '1px solid #000',
  boxShadow: 24,
  display: 'flex',
  py: 3,
  px: 7,
};

export { NavbarMenuLink, NavbarLink, buttonSxStyle, formSxStyle };
