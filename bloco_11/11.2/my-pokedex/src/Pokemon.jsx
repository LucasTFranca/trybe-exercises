import React from 'react';

class PokemonCard extends React.Component {
  render () {
    const {name, type, averageWeight, image} = this.props;

    return (
      <section className="Card">
        <h1>{ name }</h1>
        <h3>{ type }</h3>
        <p>{ averageWeight }</p>
        <img src={ image } alt="" />
      </section>
    )
  }
}

export default PokemonCard;
