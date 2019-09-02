import React from "react";
import { Link } from "react-router-dom";
import astronautsImage from '../assets/images/';

// import Navbar from '../components/'

class Registro extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          {/* <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                // src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              /> */}

          <h1>Registro de Usuarios</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Nombre de usuario</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="Name"
                value={this.props.formValues.Name}
              />
            </div>
            <div className="form-group">
              <label>Departamento</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="Departamento"
                value={this.props.formValues.Departamento}
              />
            </div>
            <div className="form-group">
              <label>Correo</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="email"
                name="Email"
                value={this.props.formValues.Email}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="password"
                name="Pass"
                value={this.props.formValues.Pass}
              />
            </div>
            <Link
              onClick={this.handleClick}
              className="btn btn-primary"
              to="/Dashboard"
            >
              Guardar
            </Link>
          </form>
        </div>

        {/* <div className="Home__col d-none d-md-block col-md-8">
              <img
                // src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Registro;
