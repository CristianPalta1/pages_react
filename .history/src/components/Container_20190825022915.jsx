import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
              <div className="col-4">
                <h1></h1>
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
                  
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
