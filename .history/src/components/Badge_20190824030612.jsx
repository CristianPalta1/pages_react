//Aqui mostrare el formulario 

import React, { Component } from 'react';
import Forms from './Forms';



class Badge extends Component {
    render() {
        return(
            <div>
                Componente el state Ing. {this.props.nombre}
            </div>
        );
    }
};

export default Badge; 