import Swal from "sweetalert2";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  const handlePokemonClick = (pokemonName: string) => {
    if (pokemonName === "pikachu") {
      Swal.fire({
        title: "Pikachu says:",
        text: "pika pikachu!!!",
        icon: "success",
        confirmButtonText: "Adorable"
      });
    }
    setPokemonName(pokemonName);
    
  };

  return (
    <nav>
      {pokemonList.map((onePokemonFromTheList) => (
        <button
          key={onePokemonFromTheList.name}
          type="button"
          onClick={() => handlePokemonClick(onePokemonFromTheList.name)}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;