import React from "react";
// import ReacDOM from 'react-dom';

import "./styles/Api.css";
import Spinner from  'react-bootstrap/Spinner';
// import data from '../data.json';

function CharacterCard(props) {
  const { personaje } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${personaje.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {personaje.name}
      </div>
    </div>
  );
}

class Loader extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      results: []
    }
  };

  //Aqui inicio la llamada a la api
  //Como no se cuando va a responder a mi solicitud
  //Creo una funcion async await "Asincrona"
  componentDidMount() {
    this.fetchPersonajes();
  }

  fetchPersonajes = async () => {
    this.setState({ loading: true, error: null });

    try {
      //Uso fetch es una funcion que trae los navegadore sy el lenguage
      //que si se le pasa una direccion de internet se hara una peticion get
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=${this.}
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: data
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });
    }
  };

  render() {
    if (this.state.error) {
        return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="container">
        <div>
          <ul className="row">
            {this.state.data.results.map(personaje => (
              <li className="col-6 col-md-3" key={personaje.id}>
                <CharacterCard personaje={personaje} />
              </li>
            ))}
            ;
          </ul>
          { this.state.loading && (
              <div className="loader"> 
                <Spinner animation ="grow" size="sm" />
                <Spinner animation ="grow" size="md" />
                <Spinner animation ="grow"/>
              </div>
          )}

          {!this.state.loading && (
            <button onClick= {() => 
              this.fetchPersonajes()}>
                Siguiente
              </button>
          )}
        </div>
      </div>
    );
  }
}

export default Loader;
