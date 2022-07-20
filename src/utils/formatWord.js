export const formatWord = (word) => {
  if (word === undefined) {
    console.log('the word you are trying to format is undefined');
    return undefined;
  }

  return word
    .split('-')
    .map((word) => {
      if (word.includes('hm' || 'tm')) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
