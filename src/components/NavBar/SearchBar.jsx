import React, { useState, useEffect } from 'react';
import {Autocomplete,TextField} from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { searchTheme } from './styles';
import { formatWord } from '../../utils/formatWord';
import itemInventory from '../../constants/itemInventory';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [searchedItem, setSearchedItem] = useState();

  const handleSearchChange = (value) =>{
    console.log(`you have selected ${value}`)
    setSearchedItem('');
  }

  return (
    <ThemeProvider theme={searchTheme}>
      <Autocomplete
        size="small"
        clearText="true"
        options={itemInventory}
        getOptionLabel={(option) =>  option.formattedName}
        onChange={(event, value) => handleSearchChange(value)}
        renderInput={(params) => (
          <Link to="/item" style={{ textDecoration: 'none' }}>
            <TextField {...params} variant="standard" placeholder="search" />
          </Link>
        )}
      />
    </ThemeProvider>
  );
}

export default SearchBar;
