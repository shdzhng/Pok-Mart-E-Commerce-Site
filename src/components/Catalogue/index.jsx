import * as React from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CatalogueGrid() {

  const items = useSelector(state=>state.items.items)

  console.log(items)


  return (
    <Box sx={{ position: 'fixed', top: 70 }}>
      {items.length > 0 ? (
        items.map((item) => (
          <Typography key={item.name}>{item.name}</Typography>
        ))
      ) : (
        <Typography>hello</Typography>
      )}

    </Box>
  );
}
