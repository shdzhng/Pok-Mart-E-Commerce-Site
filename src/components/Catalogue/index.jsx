import * as React from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


export default function CatalogueGrid() {

  const items = useSelector(state=>state.items.items)

  console.log(items)

  return (
    <>
        {items.map((item) => {
          <Typography>item.name</Typography>;
        })}
    </>
  );
}
