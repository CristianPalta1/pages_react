//Aqui mostrare el formulario de inicio de sesión

import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Slider1 from '../assets/images/7765753_orig.jpg';
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";

import "./styles/Home.css";
import Forms from "../components/Forms";

class Inicio extends Component {
  //Debo inicializar mi estado, como objeto vacio
  state = {
    form: {
      Name: "",
      Pass: ""
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
        
        <div className= "Container">
            <Navbar/>
            <br /><br /><br />
            
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img  src={Slider1} alt="First slide" className="d-block w-100" height="50%" widht/>
                    </div>
                    <div class="carousel-item">
                        {/* <img class="d-block w-100" src="..." alt="Second slide"> */}
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            
        </div>
      
        // <Container>
            // <p>
            //     asdasd
            // </p>
        // </Container>
      
    );
  }
}

export default Inicio;
