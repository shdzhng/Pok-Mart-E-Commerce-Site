import React from 'react'
import CatalogueGrid from '../components/Catalogue';
import { ThemeProvider } from '@mui/material';
import { catalogueTheme } from '../components/Catalogue/styles';
import NavBar from '../components/NavBar'

function Catalogue() {
  return (

      <ThemeProvider theme={catalogueTheme}>
        <CatalogueGrid />
      </ThemeProvider>

  );
}

export default Catalogue
