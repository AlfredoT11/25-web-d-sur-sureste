import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <NavLink className='navbar-brand' to='/'>Pokedex</NavLink>

      <ul>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </li>
        <li className='nav-item px-2'>
          <NavLink className='nav-link' to='/about'>Acerca de pokemon</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
