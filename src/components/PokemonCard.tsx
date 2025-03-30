import React from 'react';

const PokemonCard: React.FC = () => {
  return (
    <figure>
      <img src="images/kyogre.png" alt="Kyogre" />
      <figcaption>
        <h2>Kyogre</h2>
        <p>Type: Water</p>
        <p>Height: 2.5m</p>
        <p>Weight: 352kg</p>
      </figcaption>
    </figure>
  );
};

export default PokemonCard;
