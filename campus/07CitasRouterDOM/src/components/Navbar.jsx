import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/citas'>Citas</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar