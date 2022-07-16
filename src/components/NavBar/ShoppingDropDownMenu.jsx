import React, { useState, useEffect } from 'react';
import {
  Menu,
  MenuIcon,
  Box,
  Typography,
  Button,
  MenuItem,
  Container,
  Divider,
  Popper,
} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { navbarTheme } from './styles';
import { categories } from '../../constants/categories';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ShoppingDropDownMenu() {
 const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
 const [whatsNewAnchorEl, setWhatsNewAnchorEl] = React.useState(null);
 const openCategoryMenu = Boolean(categoryAnchorEl);
 const openWhatsNewMenu = Boolean(whatsNewAnchorEl);

 const handleCategoryMenu = (command, event) => {
   if (command === 'open') {
    console.log(event)
     setCategoryAnchorEl(event.currentTarget);
   } else {
     setCategoryAnchorEl(null);
   }
 };

const handleCategorySelection = (command, event) => {
  handleCategoryMenu(command);
};

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
          getContentAnchorEl={null}
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
                  handleCategorySelection('close', e);
                }}
              >
                {formatName}
                <KeyboardArrowRightIcon sx={{fontSize: '1.1em'}}/>
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
