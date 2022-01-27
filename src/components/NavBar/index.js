import { Link, NavLink } from 'react-router-dom'

import './index.css'

const NavBar = () => {
    return (  
        <nav>
          <NavLink className="nav-element" to="/">Home</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/compteur">Compteur</NavLink>
          <NavLink to="/backend">Backend</NavLink>
        </nav>

    );
}
 
export default NavBar;