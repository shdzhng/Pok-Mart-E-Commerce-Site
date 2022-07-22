import React, { useState, useEffect } from 'react';
import {
  Card,
  Grid,
  Typography,
  CardContent,
  Box,
  Button,
  CardActions,
  Paper,
  IconButton,
  Avatar,
} from '@mui/material';
import { colors } from '../../constants/colors';
import { formatWord } from '../../utils/formatWord';
import { formatSentence } from '../../utils/formatSentence';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAuth } from '../../contexts/AuthContext';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ItemCard({ item }) {
  const {
    userData,
    addFavorite,
    removeFavorite,
    addToShoppingCart,
    removeFromShoppingCart,
  } = useAuth();

  const { favorites, shoppingCart } = userData;

  const inFavorites = favorites ? favorites.includes(item.name) : false;
  const inCart = shoppingCart ? shoppingCart.includes(item.name) : false;

  const regex = /(?<=Teaches )(.*)(?=to )/;
  const moveName = item?.effect_entries?.[0]?.effect.match(regex)?.[0];
  const indexOfName = item.names.findIndex(
    (translation) => translation.language.name === 'en'
  );
  const itemName = item.names[indexOfName].name;
  const itemCategory = formatWord(item?.category?.name);
  const itemDescription = formatSentence(
    item?.flavor_text_entries.find(
      (translation) => translation.language.name === 'en'
    ).text
  );
  const itemEffect = formatSentence(item?.effect_entries?.[0]?.effect);
  const itemPrice = item.cost === 0 ? 'OUT OF STOCK' : `$${item.cost / 10}`;
  const grayMode = itemPrice.includes('$') ? false : true;
  const itemImage = item?.sprites?.default;

  return (
    <Card variant={grayMode ? 'grayMode' : null}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="title">{`${itemName}`}</Typography>
            {moveName ? (
              <Typography>
                <span className="bold">Ability:</span> {moveName}
              </Typography>
            ) : null}
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
            {itemImage ? (
              <Avatar
                sx={{ width: { xs: 50 }, height: { xs: 50 } }}
                src={itemImage}
              />
            ) : null}
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

        <Box sx={{ alignSelf: 'flex-end' }}>
          <IconButton
            onClick={() => {
              inCart ? removeFromShoppingCart(item) : addToShoppingCart(item);
            }}
            aria-label="add to cart"
          >
            {inCart ? (
              <RemoveShoppingCartIcon sx={{ color: colors.red }} />
            ) : (
              <AddShoppingCartIcon sx={{ color: colors.red }} />
            )}
          </IconButton>

          <IconButton
            aria-label="add to shopping cart"
            onClick={() => {
              inFavorites ? removeFavorite(item) : addFavorite(item);
            }}
          >
            {inFavorites ? (
              <FavoriteIcon sx={{ color: colors.red }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: colors.red }} />
            )}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
