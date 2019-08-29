import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
              <div className="className="Home__col col-4">
                <h1>Bienvenido </h1>
                <button>
                    Ingreso Documentos
                </button>
                <button>
                    Notificacion Documentos
                </button>
                <button>
                    Historial Documentos
                </button>
              </div>
              <div className="col-8">
                  <p>Formularios</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
