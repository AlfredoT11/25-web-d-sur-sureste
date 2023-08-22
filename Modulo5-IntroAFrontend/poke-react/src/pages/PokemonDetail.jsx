import { useParams } from 'react-router-dom'

function PokemonDetail () {
  const { id } = useParams()
  console.log(id)
  return (
    <div>PokemonDetail</div>
  )
}

export default PokemonDetail
