export const formatSentence = (sentence) => {
  if (sentence === undefined) {
    console.log('the sentence you are trying to format is undefined');
    return undefined;
  }

  return sentence
    .replace(';', '-')
    .replace('POKéMON', 'Pokémon')
    .replace('POKéBLOCK', 'PokéBlock')
    .replace('PokéRUS', 'PokéRus (Pokémon Virus)')
    .replace('BALL', 'ball')
    .replace(':', '-');
};
