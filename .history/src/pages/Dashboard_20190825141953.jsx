//Aqui mostrare el formulario 

import React, { Component } from 'react';
 import Container from '../components/Container';
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
            <div className="col-4">
              <Container/>
            </div>
            <div className="col-8">
              jojoj
            </div>
          </div>
        </div>
      </div>

        );
    }
};

export default Dashboard; 