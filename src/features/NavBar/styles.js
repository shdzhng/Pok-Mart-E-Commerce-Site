import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const NavbarLink = styled(Link)`
  color: ${colors.white};
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

export const NavbarMenuLink = styled(Link)`
  color: ${colors.blue3};
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;
