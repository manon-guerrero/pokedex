import React from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
  type?: string;
  height?: string;
  weight?: string;
  description?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
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
        <p>Description: {pokemon.description}</p>
      </figcaption>
    </figure>
  );
};

export default PokemonCard;
