import React from 'react';
import PokemonSimplified from '../components/PokemonSimplified';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
      limit: 15,
      set: 0,
      inputPokemon: '',
    };

    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { pokemonData, set, inputPokemon } = this.state;
    return (
      <section>
        <div>
          <input
            name="inputPokemon"
            type="text"
            value={ inputPokemon }
            onChange={ this.handleChange }
          />
          <button>Pesquisar</button>
        </div>
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
