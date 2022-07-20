import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatWord } from '../../utils/formatWord';
import { formatSentence } from '../../utils/formatSentence';

function ItemCard({item}) {
  const itemName = formatWord(item?.name);
  const itemCategory = formatWord(item?.category?.name);
  const itemDescription = formatSentence(item?.flavor_text_entries.find(
    (translation) => translation.language.name === 'en'
  ).text)
  const itemEffect = formatSentence(item?.effect_entries?.[0]?.effect);
  const itemPrice = item.cost === 0 ? 'OUT OF STOCK' : `Price: $${item.cost / 10}`;

  const itemImage = item?.sprites?.default;

  console.log(itemImage);

  return (
    <Card sx={{ width: '200px' }}>
      <CardContent>
        <img src={itemImage} />
        <Typography>{`Name: ${itemName}`}</Typography>
        <Typography>{`Category: ${itemCategory}`}</Typography>
        <Typography sx={{ fontSize: 14 }}>{itemPrice}</Typography>
        <Typography>{`Description: ${itemDescription}`}</Typography>

        {itemEffect ? <Typography>{`Effect: ${itemEffect}`}</Typography> : null}
      </CardContent>
    </Card>
  );
}

export default ItemCard;
