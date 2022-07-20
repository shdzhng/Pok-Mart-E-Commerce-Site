import * as React from 'react';
import {Card,Grid,Typography,CardContent,Box,Button,CardActions, Paper} from '@mui/material';
import { formatWord } from '../../utils/formatWord';
import { formatSentence } from '../../utils/formatSentence';


function ItemCard({item}) {
  const itemName = formatWord(item?.name);
  const itemCategory = formatWord(item?.category?.name);
  const itemDescription = formatSentence(item?.flavor_text_entries.find(
    (translation) => translation.language.name === 'en'
  ).text)
  const itemEffect = formatSentence(item?.effect_entries?.[0]?.effect);
  const itemPrice = item.cost === 0 ? 'OUT OF STOCK' : `$${item.cost / 10}`;

  const itemImage = item?.sprites?.default;

  return (
    <Card sx={{  }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="title">{`${itemName}`}</Typography>
            <Typography>
              <span className="bold">Category: </span>
              {itemCategory}
            </Typography>
            <Typography>
              <span className="bold">Price: </span>
              {itemPrice}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box component="img" sx={{ width: 30 }} src={itemImage}></Box>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Typography>
              <span className="bold">Description: </span>
              {itemDescription}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {itemEffect ? (
              <Typography>
                <span className="bold">Effect: </span>
                {itemEffect}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
