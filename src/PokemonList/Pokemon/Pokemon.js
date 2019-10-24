import React from 'react';

import './PokemonStyles.scss';

class Pokemon extends React.Component {
  state = {
    pokemonData: {}
  }

  componentDidMount = () => {
    fetch(`${this.props.url}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        pokemonData: result
      })
    })
  }

  render () {
    const { pokemonData } = this.state;
    console.log(pokemonData)
    return (
      <div className='container'>
        <h3 className='title'>{pokemonData.name}</h3>
        <div className='info'>
          <p>{`Weight: ${pokemonData.weight}`}</p>
          <p>{`Height: ${pokemonData.height}`}</p>
          <p>Types:</p>
          <div className='typesDescription'>
            {pokemonData.types ?
              pokemonData.types.map((type)=>{
                return(
                  <p>{type.type.name}</p>
                )
              }) : 'Lost Pokemon'
            }
          </div>
        </div>
        <img className='image' src={pokemonData.sprites ? pokemonData.sprites.front_default : 'https://via.placeholder.com/150'} alt="pokemon"/>
      </div>
    )
  }
}

export default Pokemon;