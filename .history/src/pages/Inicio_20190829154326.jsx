//Aqui mostrare el formulario de inicio de sesión

import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./styles/Home.css";
import Forms from "../components/Forms";

class Inicio extends Component {
  //Debo inicializar mi estado, como objeto vacio
  state = {
    form: {
        Name: '',
        Pass: ''
    }
  };

  handleChange = e => {
    //Para ver el valor del inpunt see escribe value:e.target.value
    //tambien funciona con el input para saber que es name:e.target.name

    // const nextForm = this.state.form
    // nextForm[e.target.name] =  e.target.value;

    this.setState({
      // form: nextForm,
      //Esto es lo que va a hacer es que cada campo, se guardada en su respectivo input
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
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
    console.log(this.state.form);
  };

  render() {
    return (
        <React.Fragment>
<div className="container">
        <h2>kjshfkjsf</h2>
      </div>
        </React.Fragment>
      
    );
  }
}

export default Inicio;
