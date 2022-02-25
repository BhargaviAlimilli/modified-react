import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './NavBar.css'

function NavBar(props) {
  return (
    <div>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/host">Become a host</NavLink></li>
          <li><NavLink  to="/help">Help</NavLink ></li>
          <li><NavLink  to="/signup">SignUp</NavLink ></li>
          <li><NavLink  to="signin">Sign In</NavLink ></li>

        </ul>
      </div>
  </nav>
  </div>
  );
} 


        
  
export default NavBar;
