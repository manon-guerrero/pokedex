import React from "react";

const pokemonList = [
  {
    name: "kyogre",
    imgSrc: "images/kyogre.png",
    type: "Water",
    height: "2.5m",
    weight: "352kg"
  },
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Grass",
    height: "0.7m",
    weight: "6.9kg"
  },
  {
    name: "mew",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    type: "Psychic",
    height: "0.4m",
  },
];

const PokemonCard: React.FC = () => {
  const pokemon = pokemonList[1];

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>
        <h2>{pokemon.name}</h2>
        <p>Type: {pokemon.type}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </figcaption>
    </figure>
  );
};

export default PokemonCard;