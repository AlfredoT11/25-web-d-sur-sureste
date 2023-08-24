import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetail () {
  const { id } = useParams()
  
  const [pokemonDetails, setPokemonDetails] = useState({});
  
  const apiVersion = 'v2'
  console.log(id)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/${apiVersion}/pokemon/${id}`)
    .then(response => response.json())
    .then(dataJson => {
      console.log(dataJson)
      setPokemonDetails(dataJson)}
    )
    .catch(error => console.log(error))
  }, [id, apiVersion])

  return (
    <>
      <div>PokemonDetail</div>
      <h1>{pokemonDetails?.name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
      <table className='table'>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {pokemonDetails.stats?.map(stat => (
            <tr>
              <td>{stat.stat.name}</td> 
              <td>{stat.base_stat}</td>
            </tr>            
          ))}
        </tbody>
      </table>
      
    </>
  )
}

export default PokemonDetail
