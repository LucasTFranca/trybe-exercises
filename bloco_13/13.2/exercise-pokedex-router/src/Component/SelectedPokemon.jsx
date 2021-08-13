import React from 'react';
import '../pokemon.css';

class SelectedPokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, foundAt} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default SelectedPokemon;