import React from 'react';

import Pokemon from './Pokemon/Pokemon';

import "./PokemonListStyles.scss";

class PokemonList extends React.Component {
  state = {
    data: {}
  }

  componentDidMount = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(result => {
      this.setState({
        data: result
      })
    })
  }

  render () {
    const { data } = this.state;
    // console.log(data)

    const listItems = data.results ? data.results.map((littledata, index) =>{
      return(
      <Pokemon url={littledata.url} key={index}>{littledata.name}</Pokemon>
      )
    }) : 'Lost pokemons';

    return (
      <div className='page'>
        {
          listItems
        }
      </div>
    )
  }
}

export default PokemonList;