import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <nav "navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
        <a class="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text">Navbar text with an inline element</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
