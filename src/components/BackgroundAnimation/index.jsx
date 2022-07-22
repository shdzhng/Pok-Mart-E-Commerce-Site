import React from 'react';
import Box from '@mui/material/Box';
import {
  Butterfree,
  Weedle,
  Gengar,
  Venonat,
  Pikachu,
} from './backgroundAnimation.styles';

function BackgroundAnimation() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Butterfree
        component="img"
        src="https://projectpokemon.org/images/normal-sprite/butterfree.gif"
      />

      <Weedle
        component="img"
        src="https://projectpokemon.org/images/normal-sprite/weedle.gif"
      />

      <Gengar
        component="img"
        src="https://projectpokemon.org/images/normal-sprite/gengar.gif"
      />
      <Venonat
        component="img"
        src="https://projectpokemon.org/images/normal-sprite/venonat.gif"
      />
      <Pikachu
        component="img"
        src="https://projectpokemon.org/images/normal-sprite/pikachu.gif"
      />
    </Box>
  );
}

export default BackgroundAnimation;
