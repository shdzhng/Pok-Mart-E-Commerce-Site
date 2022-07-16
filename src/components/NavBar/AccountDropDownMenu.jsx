import React, { useState, useEffect } from 'react';
import {
  Slide,
  CssBaseline,
  useScrollTrigger,
  Box,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Tooltip,
  Menu,
  Container,
  IconButton,
  Button,
  Icon,
} from '@mui/material';

import { ThemeProvider } from '@mui/material';
import { navbarTheme } from './styles';
import PersonIcon from '@mui/icons-material/Person';
import { NavbarLink, NavbarMenuLink } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function AccountDropDownMenu({handleLoginModal}) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { currentUser, logout } = useAuth();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target);
  };

  const settings = [
    { name: 'Home', action: null, href: '/' },
    { name: 'Orders', action: null, href: '/dashboard' },
    { name: 'Account', action: null, href: '/dashboard' },
    { name: 'Dashboard', action: null, href: '/dashboard' },
    {
      name: 'Logout',
      action: () => {
        logout();
      },
      href: '/',
    },
  ];

  return (
    <ThemeProvider theme={navbarTheme}>
      {currentUser ? (
        <>
          <Tooltip title="Open settings">
            <IconButton
              size="large"
              sx={{ p: '0.5em' }}
              onClick={(e) => {
                handleOpenUserMenu(e);
              }}
            >
              <PersonIcon sx={{ fill: '#f1faff' }} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElUser}
            keepMounted
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <NavbarMenuLink
                key={setting.name}
                to={setting.href}
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  return setting.action ? setting.action() : null;
                }}
              >
                <MenuItem
                  sx={{ justifyContent: 'center' }}
                  onClick={(e) => {
                    handleCloseUserMenu(e);
                  }}
                >
                  <Typography>{setting.name}</Typography>
                </MenuItem>
              </NavbarMenuLink>
            ))}
          </Menu>
        </>
      ) : (
        <IconButton onClick={handleLoginModal} size="large" sx={{ p: '0.2em' }}>
          <PersonOutlineIcon sx={{ fill: `${colors.white}` }} />
        </IconButton>
      )}
    </ThemeProvider>
  );
}

export default AccountDropDownMenu;
