import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Box, Modal, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { searchTheme } from './styles';
import { formatWord } from '../../utils/formatWord';
import itemInventory from '../../constants/itemInventory';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function SearchBar() {
  const [searchedItem, setSearchedItem] = useState();
  const [open, setOpen] = React.useState(false);
  const openModal = Boolean(open && searchedItem);

  const handleClose = () => {
    setSearchedItem(null);
    setOpen(false);
  };

  const handleSearchChange = (value) => {
    setOpen(true);
    setSearchedItem(value);
  };

  return (
    <ThemeProvider theme={searchTheme}>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
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
