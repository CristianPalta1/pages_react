import React from 'react';

class Forms extends React.Component {
  
  handleChange = e => {
    //Para ver el valor del inpunt see escribe value:e.target.value
    //tambien funciona con el input para saber que es name:e.target.name
  }
  
  //Evento para saber que sucedio al hacer click en el boton
  handleClick = e => {
    console.log('Button was clicked');
  };


  //El boton es de tipo submit, si no quiero que eso pase porque recarga la pagina,
  //debo espicicar el tipo de boton. En este caso tipo button
  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Inicio de Sesión</h1>

        <form >
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
              // value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="password"
              name="pass"
              // value={this.props.formValues.lastName}
            />
          </div>

          

          <button type="button" onClick= {this.handleClick}  className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
