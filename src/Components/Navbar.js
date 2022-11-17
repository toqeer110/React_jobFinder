import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>  {

return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
      
 <Link to="/"  className="navbar-item title"><strong>JoB</strong></Link>

          <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <Link to="/"  className="navbar-item">Home</Link>

      
  </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

);
}


export default Navbar;