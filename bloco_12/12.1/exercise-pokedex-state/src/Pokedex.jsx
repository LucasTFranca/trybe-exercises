import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.changeType = this.changeType.bind(this);

      this.state = {
        filteredPokemons: props.pokemons,
        order: 0,
      };
    }

    handleChange() {
      if (this.state.order === this.state.filteredPokemons.length - 1) {
        this.setState({ order: 0 });
      } else this.setState(({ order }) => ({ order: order + 1 }));
    }

    changeType(event) {
      const type = event.target.innerText;
      const filteredPokemons = this.props.pokemons.filter((pokemon) => pokemon.type === type);
      this.setState({ filteredPokemons, order: 0 })
    }

    render() {
      const { order, filteredPokemons } = this.state;
        return (
          <>
            <div className="pokedex">
              <Pokemon pokemon={filteredPokemons[order]} />
            </div>
            <div>
              <button onClick={ this.handleChange } >Next</button>
              <button onClick={ this.changeType } >Fire</button>
              <button onClick={ this.changeType } >Psychic</button>
            </div>
          </>
        );
    }
}

export default Pokedex;