import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../../constants/pokeball.svg';
import { Icon } from '@mui/material';
import { NavbarLink, NavbarMenuLink } from './styles';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogOut = () => {
    console.log('logging');
    setLoggedIn(!loggedIn);
  };

  const handleLogIn = () => {
    console.log('logging in');
    setLoggedIn(!loggedIn);
  };

  const pages = ['PokéBalls', 'Cures', 'Machines'];
  const settings = [
    { name: 'Home', action: null, href: '/' },
    { name: 'Orders', action: null, href: '/dashboard' },
    { name: 'Account', action: null, href: '/dashboard' },
    { name: 'Dashboard', action: null, href: '/dashboard' },
    {
      name: 'Logout',
      action: () => {
        handleLogOut();
      },
      href: '/',
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ minWidth: 'xs', bgcolor: '#275597' }}>
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', sm: 'space-around' },
              }}
              disableGutters
            >
              <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography>{`${page} + hello`}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ display: 'flex' }}>
                <NavbarLink to="/" style={{ textDecoration: 'none' }}>
                  <Icon
                    sx={{
                      display: 'inline-block',
                      mr: 1,
                      overflow: 'visible',
                    }}
                  >
                    <img
                      width={30}
                      src={logo}
                      style={{ verticalAlign: 'middle' }}
                    />
                  </Icon>
                </NavbarLink>
                <NavbarLink to="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      mr: 2,
                      display: 'flex',
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    PokéMart
                  </Typography>
                </NavbarLink>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {loggedIn ? (
                <Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <PersonIcon sx={{ fill: '#f1faff' }} />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    keepMounted
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'center',
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
                      >
                        <MenuItem
                          sx={{ justifyContent: 'center' }}
                          onClick={() => {
                            handleCloseUserMenu();
                          }}
                        >
                          <Typography>{setting.name}</Typography>
                        </MenuItem>
                      </NavbarMenuLink>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    handleLogIn();
                  }}
                  sx={{ p: 2 }}
                >
                  <PersonOutlineIcon sx={{ fill: '#f1faff' }} />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
