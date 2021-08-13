import React from 'react';
import PokemonCard from './Pokemon';
import Pokemons from './data';

class Pokedex extends React.Component {
  render () {
    return (
      Pokemons.map(({ name, id, type, averageWeight: { value, measurementUnit }, image}) => (
        <PokemonCard 
         key={id} 
         name={name} 
         type={type} 
         averageWeight={`${value}${measurementUnit}`} 
         image={image} 
       />
      ))
    )
  }
}

export default Pokedex;
