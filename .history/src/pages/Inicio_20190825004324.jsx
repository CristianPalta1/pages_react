//Aqui mostrare el formulario de inicio de sesión

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
// import Forms from './Forms';



class Inicio extends Component {
    render() {
        return(
            <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                // src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>Inicio de Sesión</h1>
              <Link className="btn btn-primary" to="/Dashboard">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                // src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
        );
    }
};

export default Inicio; 