const MAX_DEX_ID = 3;

export const getRandomPokemon: (notThisOne?: number) => number = (
  notThisOne
) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID + 1);
  if (pokedexNumber !== notThisOne) return pokedexNumber;
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstid = getRandomPokemon();
  const secondid = getRandomPokemon(firstid);

  return [firstid, secondid];
};
