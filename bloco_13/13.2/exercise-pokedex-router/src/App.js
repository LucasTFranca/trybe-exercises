import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonPage from './Pages/PokemonPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>{ <Link to="/">Pokedex</Link> }</h1>
        <Switch>
          <Route exact path="/" render={ () => <Pokedex pokemons={pokemons} /> } />
          <Route path="/PokemonPage/:pokemonId" render={ (props) => <PokemonPage {...props} pokemons={pokemons} /> } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;