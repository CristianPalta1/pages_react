import React from 'react';

import "./styles/Home.css";

class Forms extends React.Component {
  
  state = {
    Name: '',
    Pass: ''
};

  handleChange = e => {
    //Para ver el valor del inpunt see escribe value:e.target.value
    //tambien funciona con el input para saber que es name:e.target.name
  }
  
  //Evento para saber que sucedio al hacer click en el boton
  handleClick = e => {
    console.log('Boton Oprimido');
  };


  //El boton es de tipo submit, si no quiero que eso pase porque recarga la pagina,
  //debo espicicar el tipo de boton. En este caso tipo button
  handleSubmit = e => {
    e.preventDefault();
    console.log('Formulario ha sido Enviado');
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

              <h1>Inicio de Sesión</h1>

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Nombre de usuario</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    name="Name"
                    value={this.state.Name}
                  />
                </div>

                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    type="password"
                    name="Pass"
                    value={this.state.Pass}
                  />
                </div>

                {/* <button type="button" onClick= {this.handleClick}  className="btn btn-primary">
            Save
          </button> */}
                {/* <button  className="btn btn-primary">
                  Save
                </button> */}
                <button
                
                onClick={this.handleClick}
                className="btn btn-primary"
                
              >
                Start
              </button>
              </form>
              
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
}

export default Forms;
