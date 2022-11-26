import React from 'react';

class PokemonSimplified extends React.Component {
  constructor() {
    super();
    this.state = {
      type: [],
      name: '',
      sprite: '',
    };

    this.handleData = this.handleData.bind(this);
  };

  async componentDidMount() {
    const { pokemon } = this.props;
    const response = await fetch(pokemon);
    const data = await response.json();
    this.handleData(data);
  };

  handleData(param) {
    const { name, types, sprites } = param;
    const { 'official-artwork': { front_default } } = sprites.other;
    const nameFirstUpper = name[0].toUpperCase() + name.substr(1);
    const arrayType = [];
    types.forEach((item) => {
      arrayType.push(item.type.name);
    });

    this.setState({
      type: arrayType,
      name: nameFirstUpper,
      sprite: front_default,
    });
  }

  render() {
    const { type, name, sprite } = this.state;
    return (
      <div>
        <img src={ sprite } alt={ name } />
        <h3>{ name }</h3>
        <div>
          {
            type.map((item) => <p key={ item }>{ item }</p>)
          }
        </div>
      </div>
    );
  }
}

export default PokemonSimplified;
