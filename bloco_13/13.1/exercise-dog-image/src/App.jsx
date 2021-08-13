import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.dogFecth = this.dogFecth.bind(this);

    this.state = {
      dog: undefined,
      loading: true,
      listDogs: [],
    };
  }

  componentDidMount() {
    this.dogFecth();
  }

  handleChange() {
    this.setState(({ listDogs, dog }) => ({ listDogs: [...listDogs, dog] }));
    this.dogFecth();
  }

  async dogFecth() {
    this.setState({ loading: true },
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const { message } = await response.json();
        this.setState({ dog: message, loading: false });
      });
  }

  renderDog() {
    const { dog } = this.state;
    return (
      <div>
        <img style={ { width: 150, height: 150 } } src={ dog } alt="dogs" />
        <button onClick={ this.handleChange } type="button">Save Dog</button>
      </div>
    );
  }

  render() {
    const { listDogs, loading } = this.state;
    const loadingElemnt = <p> Loading.. </p>;
    return (
      <div className="App">
        { listDogs.map((dog, index) => (
          <img
            key={ index }
            style={ { width: 150, height: 150 } }
            src={ dog }
            alt="dogs"
          />
        )) }

        { loading ? loadingElemnt : this.renderDog() }

      </div>
    );
  }
}

export default App;
