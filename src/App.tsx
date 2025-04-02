import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "Grass",
    height: "0.7m",
    weight: "6.9kg",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    type: "Psychic",
    height: "0.4m",
  }
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur")

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);




  if (pokemon == null) {
    throw new Error("Invalid pokemon name")
  }

  return (
    <section>
      <h1>Pokemon Card</h1>
      <PokemonCard pokemon={pokemon} />
      <div>
        <button onClick={() => setPokemonName("bulbasaur")}>
          Bulbasaur
        </button>
        <button onClick={() => setPokemonName("mew")}>
          Mew
        </button>
      </div>
    </section>
  );
}

export default App;