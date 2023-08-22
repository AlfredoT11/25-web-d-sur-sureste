import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDetail from '../pages/PokemonDetail'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id' element={<PokemonDetail />} />
    </Routes>
  )
}

export default RouterIndex
