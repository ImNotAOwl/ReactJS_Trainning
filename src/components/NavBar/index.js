import { Link } from 'react-router-dom'

import './index.css'

const NavBar = () => {
    return (  
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">À propos</Link>
        </nav>

    );
}
 
export default NavBar;