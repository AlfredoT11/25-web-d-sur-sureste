const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
      <a className='navbar-brand' href='/'>Pokedex</a>

      <ul>
        <li className='nav-item px-2'>
          <a className='nav-link' href='/'>Home</a>
        </li>
        <li className='nav-item px-2'>
          <a className='nav-link' href='/about'>Acerca de pokemon</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
