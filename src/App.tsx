import "./App.css";

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
  return (
    <section>
      <h1>Pokemon Card</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <PokemonCard pokemon={pokemonList[0]} />
        <PokemonCard pokemon={pokemonList[1]} />
      </div>
    </section>
  );
}

export default App;