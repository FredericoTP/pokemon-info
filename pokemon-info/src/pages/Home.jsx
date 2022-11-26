import React from 'react';
import PokemonSimplified from '../components/PokemonSimplified';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
      limit: 15,
      set: 0,
    };

    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
  }

  async componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokemonData: data.results,
    });
  }

  async handleClickIncrease() {
    const { limit, set } = this.state;
    let numberOne = set + 15;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${numberOne}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokemonData: data.results,
    });

    this.setState((prevState) => ({
      set: prevState.set + 15,
    }))
  }

  async handleClickDecrease() {
    const { limit, set } = this.state;
    let numberOne = set - 15;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${numberOne}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokemonData: data.results,
    });

    this.setState((prevState) => ({
      set: prevState.set - 15,
    }))
  }

  render() {
    const { pokemonData, set } = this.state;
    return (
      <section>
        <div>
          {
            pokemonData.map((item, index) => (
              <PokemonSimplified
                key={ `${item.name}${index}` }
                pokemon={ item.url }
              />
            ))
          }
        </div>
        <div>
          <button
            type='button'
            onClick={ this.handleClickDecrease }
            disabled={ set <= 0 }
          >
            Anterior
          </button>
          <button
            type='button'
            onClick={ this.handleClickIncrease }
            disabled={ set >= 1140 }
          >
            Próximo
          </button>
        </div>
      </section>
    );
  }
}

export default Home;
