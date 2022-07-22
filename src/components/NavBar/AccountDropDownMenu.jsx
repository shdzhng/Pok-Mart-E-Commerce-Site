import React, { useState, useEffect } from 'react';
import { Typography, MenuItem, Tooltip, Menu, IconButton } from '@mui/material';

import { ThemeProvider } from '@mui/material';
import { navbarTheme } from './styles';
import PersonIcon from '@mui/icons-material/Person';
import { NavbarLink, NavbarMenuLink } from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function AccountDropDownMenu({ handleLoginModal }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { currentUser, logout } = useAuth();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target);
  };

  const settings = [
    { name: 'Orders', action: null, href: '/orders' },
    { name: 'Account', action: null, href: '/account' },
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
              size="medium"
              onClick={(e) => {
                handleOpenUserMenu(e);
              }}
            >
              <PersonIcon sx={{ fill: '#f1faff' }} />
            </IconButton>
          </Tooltip>
          <Menu
            elevation={0}
            anchorEl={anchorElUser}
            keepMounted
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
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
                  {setting.name}
                </MenuItem>
              </NavbarMenuLink>
            ))}
          </Menu>
        </>
      ) : (
        <IconButton onClick={handleLoginModal} size="large">
          <PersonOutlineIcon sx={{ fill: `${colors.white}` }} />
        </IconButton>
      )}
    </ThemeProvider>
  );
}

export default AccountDropDownMenu;
