import React from 'react';
import PokemonSimplified from '../components/PokemonSimplified';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonData: [],
    };
  }

  async componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      pokemonData: data.results,
    });
  }

  render() {
    const { pokemonData } = this.state;
    return (
      <section>
        {
          pokemonData.map((item, index) => (
            <PokemonSimplified
              key={ `${item.name}${index}` }
              pokemon={ item.url }
            />
          ))
        }
      </section>
    );
  }
}

export default Home;
