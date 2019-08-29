import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Forms 
              onChange={this.handleChange} 
              formValues = {this.state.form}/>
            </div>
            <div className="col-4">
              jojoj
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
