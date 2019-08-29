import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return(
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

export default Carousel; 