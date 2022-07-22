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

      {/* <Pikachu
        component="img"
        src="https://pa1.narvii.com/6321/05701fbd1b6f861078e82ff57d17f367b69c5b7a_hq.gif"
      /> */}
    </Box>
  );
}

export default BackgroundAnimation;
