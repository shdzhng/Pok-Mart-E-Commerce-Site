import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField, Modal } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { searchTheme } from './styles';
import itemInventory from '../../constants/itemInventory';
import { fetchItemByURL } from '../../contexts/categorySlice';
import ItemCard from '../ItemCard/ItemCard';

function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { item, itemStatus } = useSelector((state) => state.categoryItems);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearchChange = (value) => {
    if (value.url) {
      dispatch(fetchItemByURL(value.url));
      setOpen(true);
    }
  };

  return (
    <ThemeProvider theme={searchTheme}>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <>
          <ItemCard item={item} status={itemStatus} />
        </>
      </Modal>

      <Autocomplete
        size="small"
        clearText="true"
        options={itemInventory}
        getOptionLabel={(option) => option.formattedName}
        onChange={(event, value) => handleSearchChange(value)}
        renderInput={(params) => (
          <TextField {...params} variant="standard" placeholder="search" />
        )}
      />
    </ThemeProvider>
  );
}

export default SearchBar;
