import React, { useState, useEffect } from 'react';
import {
  Menu,
  Box,
  Typography,
  Button,
  MenuItem,
  Divider,
} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { navbarTheme } from './styles';
import { categories } from '../../constants/categories';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector, useDispatch } from 'react-redux';
import { lookup } from '../search/searchSlice';

function ShoppingDropDownMenu() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.search);

 const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
 const openCategoryMenu = Boolean(categoryAnchorEl);

 useEffect(() => {
   console.log(search);
 }, [search]);

 const handleCategoryMenu = (command, event) => {
   if (command === 'open') setCategoryAnchorEl(event.currentTarget);
   if (command === 'close') setCategoryAnchorEl(null);
   if (command === 'select') {
    setCategoryAnchorEl(null);
      dispatch(lookup(event.target.textContent));
   }
   }

 const handleWhatsNew = () =>{
  console.log('whats new?')
 }

  return (
    <ThemeProvider theme={navbarTheme}>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
        <Button
          onClick={(e) => {
            handleCategoryMenu('open', e);
          }}
        >
          Categories
        </Button>

        <Menu
          getcontentanchorel={null}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorEl={categoryAnchorEl}
          open={openCategoryMenu}
          onClose={() => {
            handleCategoryMenu('close');
          }}
        >
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="title"> All Categories </Typography>
          </Box>

          <Divider />

          {categories.map((category) => {
            const formatName = category
              .split('-')
              .map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1);
              })
              .join(' ');

            return (
              <MenuItem
                key={category}
                onClick={(e) => {
                  handleCategoryMenu('select', e);
                }}
              >
                {formatName}
                <KeyboardArrowRightIcon sx={{ fontSize: '1.1em' }} />
              </MenuItem>
            );
          })}

        </Menu>

        <Button onClick={handleWhatsNew}>What's New</Button>
      </Box>
    </ThemeProvider>
  );
}

export default ShoppingDropDownMenu;
