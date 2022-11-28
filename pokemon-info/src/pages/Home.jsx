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
      types: 'todos',
    };

    this.handleClickIncrease = this.handleClickIncrease.bind(this);
    this.handleClickDecrease = this.handleClickDecrease.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickFindPokemon = this.handleClickFindPokemon.bind(this);
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

  handleClickFindPokemon() {
    const { inputPokemon } = this.state;
    const data = [{
      name: inputPokemon,
      url: `https://pokeapi.co/api/v2/pokemon/${inputPokemon.toLowerCase()}`,
    }];

    this.setState({
      pokemonData: data,
      inputPokemon: '',
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
          <button
            onClick={ this.handleClickFindPokemon }
            type="button"
            disabled={ inputPokemon === '' }
          >
            Pesquisar
          </button>
        </div>
        <div>
          <select name="types" onChange={ this.handleChange }>
            <option value="todos">Todos</option>
            <option value="1">Normal</option>
            <option value="2">Lutador</option>
            <option value="3">Voador</option>
            <option value="4">Venenoso</option>
            <option value="5">Terra</option>
            <option value="6">Pedra</option>
            <option value="7">Inseto</option>
            <option value="8">Fantasma</option>
            <option value="9">Ferro</option>
            <option value="10">Fogo</option>
            <option value="11">Água</option>
            <option value="12">Grama</option>
            <option value="13">Elétrico</option>
            <option value="14">Psíquico</option>
            <option value="15">Gelo</option>
            <option value="16">Dragão</option>
            <option value="17">Sombrio</option>
            <option value="18">Fada</option>
          </select>
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
