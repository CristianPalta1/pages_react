//Aqui mostrare el formulario 

import React, { Component } from 'react';
import Forms from './Forms';



class Badge extends Component {
    render() {
        return(
            <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            // src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
              Nombre
            {/* {this.props.firstName} <br /> {this.props.lastName} */}
          </h1>
        </div>

        <div className="Badge__section-info">
            Cargo
            Correo
          {/* <h3>{this.props.jobTitle}</h3> */}
          {/* <div>@{this.props.twitter}</div> */}
        </div>

        <div className="Badge__footer">Seguridad Del Cauca LTDA</div>
      </div>
        );
    }
};

export default Badge; 