import "./App.css";
import { useEffect, useRef, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import Swal from "sweetalert2";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "grass",
    height: "7",
    weight: "69",
      description: "Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with a light, cream-colored underside. It has large, dark green eyes and a wide, friendly smile. Its ears are relatively large and rounded, and it has a small, pointed snout. Bulbasaur's arms and legs are short and chubby, with large, clawed hands and feet. It has a pair of large, pointed horns on its head, which are actually the source of its energy. Bulbasaur is a very friendly and approachable Pokémon, and it is often seen with other Pokémon in the wild."
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "fire",
    height: "6",
    weight: "85",
    description: "Charmander is a small, quadrupedal Pokémon that has red-orange skin with a light, cream-colored underside. It has large, dark green eyes and a wide, friendly smile. Its ears are relatively large and rounded, and it has a small, pointed snout. Charmander's arms and legs are short and chubby, with large, clawed hands and feet. It has a pair of large, pointed horns on its head, which are actually the source of its energy. Charmander is a very friendly and approachable Pokémon, and it is often seen with other Pokémon in the wild."
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "water",
    height: "5",
    weight: "90",
    description: "Squirtle is a small, quadrupedal Pokémon that has blue-green skin with a light, cream-colored underside. It has large, dark green eyes and a wide, friendly smile. Its ears are relatively large and rounded, and it has a small, pointed snout. Squirtle's arms and legs are short and chubby, with large, clawed hands and feet. It has a pair of large, pointed horns on its head, which are actually the source of its energy. Squirtle is a very friendly and approachable Pokémon, and it is often seen with other Pokémon in the wild."
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "electric",
    height: "4",
    weight: "60",
    description: "Pikachu is a small, quadrupedal Pokémon that has blue-green skin with a light, cream-colored underside. It has large, dark green eyes and a wide, friendly smile. Its ears are relatively large and rounded, and it has a small, pointed snout. Pikachu's arms and legs are short and chubby, with large, clawed hands and feet. It has a pair of large, pointed horns on its head, which are actually the source of its energy. Pikachu is a very friendly and approachable Pokémon, and it is often seen with other Pokémon in the wild."
  },
  {
    name: "mew",
    description: "Continue your journey to catch all 151 Pokémon!"
  },
];

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur")

  const hasAlerted = useRef(false);

  useEffect(() => {
    if (!hasAlerted.current) {
      Swal.fire({
        title: "Professor Oak says:",
        text: "Hello Pokémon Trainer! Here is your brand new Pokédex!",
        icon: "success",
        confirmButtonText: "Hello! Thank you Professor Oak!"
      });
      hasAlerted.current = true;
    }
  }, []);

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name")
  }

  return (
    <div>
      <h1>Pokemon Search</h1>
      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;