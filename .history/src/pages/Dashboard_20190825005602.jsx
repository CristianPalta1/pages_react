//Aqui mostrare el formulario 

import React, { Component } from 'react';
// import Forms from './Forms';
import "./styles/Home.css";


class Dashboard extends Component {
    handleChange = e => {
        //Para ver el valor del inpunt see escribe value:e.target.value
        //tambien funciona con el input para saber que es name:e.target.name
      };
    
      //Evento para saber que sucedio al hacer click en el boton
      handleClick = e => {
        console.log("Boton Oprimido");
      };
    
      //El boton es de tipo submit, si no quiero que eso pase porque recarga la pagina,
      //debo espicicar el tipo de boton. En este caso tipo button
      handleSubmit = e => {
        e.preventDefault();
        console.log("Formulario ha sido Enviado");
        console.log(this.state);
      };
    
      render() {
        return (
          <div className="Home">
            <div className="container">
              <div className="row">
                <div className="Home__col col-12 col-md-4">
                  <img
                    // src={platziconfLogoImage}
                    alt="Platzi Conf Logo"
                    className="img-fluid mb-2"
                  />
    
                  <h1>Seguridad del Cauca</h1>
    
                  
                  <button
                    onClick={this.handleClick}
                    className="btn btn-primary"
                    to="/Dashboard"
                  >
                    Start
                  </button>
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

export default Dashboard; 