import React from "react";
import data from "./data";
import Pokemon from "./Pokemon"

class Pokedex extends React.Component {
  render() {
    return (
      data.map(eachPokemon => (
          <Pokemon key={eachPokemon.id} pokemon={eachPokemon} />  
      ))
    );
  }
}

export default Pokedex;