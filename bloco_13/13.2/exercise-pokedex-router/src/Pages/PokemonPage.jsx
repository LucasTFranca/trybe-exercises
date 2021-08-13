import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import SelectedPokemon from '../Component/SelectedPokemon';

class PokemonPage extends React.Component {
  render() {
    const { match, pokemons } = this.props;
    const pokemon = pokemons.find(({ id }) => id === Number(match.params.pokemonId));
    return (
      <SelectedPokemon pokemon={pokemon} />
    );
  }
}

export default PokemonPage;