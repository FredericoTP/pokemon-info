import React from 'react';

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
      pokemonData: data,
    });
  }

  render() {
    const { pokemonData } = this.state;
    return (
      <p>asd</p>
    );
  }
}

export default Home;
