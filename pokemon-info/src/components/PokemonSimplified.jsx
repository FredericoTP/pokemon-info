import React from 'react';
import { Link } from 'react-router-dom';

class PokemonSimplified extends React.Component {
  constructor() {
    super();
    this.state = {
      type: [],
      name: '',
      sprite: '',
      color: '',
    };

    this.handleData = this.handleData.bind(this);
    this.defineBgColor = this.defineBgColor.bind(this);
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

    this.defineBgColor(arrayType);

    this.setState({
      type: arrayType,
      name: nameFirstUpper,
      sprite: front_default,
    });
  }

  defineBgColor(param) {
    const color = [];

    param.forEach((item) => {
      const expression = item;
      switch (expression) {
        case 'normal':
          color.push('rgb(168,167,122)');
          break;
        case 'fighting':
          color.push('rgb(194,46,40)');
          break;
        case 'flying':
          color.push('rgb(169,143,243)');
          break;
        case 'poison':
          color.push('rgb(163,62,161)');
          break;
        case 'ground':
          color.push('rgb(226,191,101)');
          break;
        case 'rock':
          color.push('rgb(182,161,54)');
          break;
        case 'bug':
          color.push('rgb(166,185,26)');
          break;
        case 'ghost':
          color.push('rgb(115,87,151)');
          break;
        case 'steel':
          color.push('rgb(183,183,206)');
          break;
        case 'fire':
          color.push('rgb(238,129,48)');
          break;
        case 'water':
          color.push('rgb(99,144,240)');
          break;
        case 'grass':
          color.push('rgb(122,199,76)');
          break;
        case 'electric':
          color.push('rgb(247,208,44)');
          break;
        case 'psychic':
          color.push('rgb(249,85,135)');
          break;
        case 'ice':
          color.push('rgb(150,217,214)');
          break;
        case 'dragon':
          color.push('rgb(111,53,252)');
          break;
        case 'dark':
          color.push('rgb(112,87,70)');
          break;
        case 'fairy':
          color.push('rgb(214,133,173)');
          break;
        default:
          color.push('rgb(0, 0, 0');
      }
    });

    this.setState({
      color,
    });
  }

  render() {
    const { type, name, sprite, color } = this.state;
    return (
      <Link to={ `/${name.toLowerCase()}` }>
        <div style={ { backgroundColor: color[0] } }>
          <img src={ sprite } alt={ name } />
          <h3>{ name }</h3>
          <div>
            {
              type.map((item, index) => (
                <p
                  style={ { backgroundColor: color[index] } }
                  key={ item }
                >
                  { item }
                </p>
              ))
            }
          </div>
        </div>
      </Link>
    );
  }
}

export default PokemonSimplified;
