import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
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
import { Link } from 'react-router-dom';

//firebase
import { useAuth } from '../../contexts/AuthContext';

//styling
import logo from '../../constants/pokeball-white.svg';
import { NavbarLink, NavbarMenuLink } from './styles';
import { colors } from '../../constants/colors';
import MenuIcon from '@mui/icons-material/Menu';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//components
import SearchBar from './SearchBar';
import LogInModal from './LogInModal';
import AccountDropDownMenu from './AccountDropDownMenu';
import ShoppingDropDownMenu from './ShoppingDropDownMenu';

//etc
import { categories } from '../../constants/categories';

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

function HideAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [openLogIn, setOpenLogIn] = useState(false);

  const [searchItems, setSearchItems] = useState([]);
  const { currentUser, logout } = useAuth();

  ///
 const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
 const openCategoryMenu = Boolean(categoryAnchorEl);

 const handleOpenCategoryMenu = (event, command) => {
   setCategoryAnchorEl(event.currentTarget);
 };

 const handleCloseCategoryMenu = (event, command) => {
   setCategoryAnchorEl(null)
 };

 const handleShoppingCart  = () =>{
  console.log('shopping cart clicked')
 }

  const handleClose = () => setOpenLogIn(false);

  const handleLoginModal = () => {
    setOpenLogIn(true);
  };

  const pages = [{ name: 'Categories', action: (e)=>{handleOpenCategoryMenu(e)} }, { name: "What's New",action:null }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography>{`${page.name}`}</Typography>
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

              <ShoppingDropDownMenu />

              <SearchBar
                setSearchItems={setSearchItems}
                searchItems={searchItems}
              />
              <AccountDropDownMenu handleLoginModal={handleLoginModal} />

              <IconButton
                onClick={handleShoppingCart}
                size="large"
                sx={{ p: '0.2em' }}
              >
                <ShoppingCartIcon sx={{ fill: `${colors.white}` }} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <LogInModal open={openLogIn} handleClose={handleClose} />
    </React.Fragment>
  );
}
export default memo(HideAppBar);
