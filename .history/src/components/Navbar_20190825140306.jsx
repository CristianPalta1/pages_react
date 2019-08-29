import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            {/* <img className="Navbar__brand-logo" src={logo} alt="Logo" /> */}
            <span className="font-weight-light">Seguridad del</span>
            <span className="font-weight-bold">Cauca</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
