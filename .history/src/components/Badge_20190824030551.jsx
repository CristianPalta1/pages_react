//Aqui mostrare el formulario 

import React, { Component } from 'react';
import Forms from './Forms';

state = {
    ingresoDoc: [
        {
            nombre: "Cristian",
            numRadicado: 2,
            novedad: "Ninfuna",
            departamento: "Ingeniera",

        }
    ]
};

class Badge extends Component {
    render() {
        return(
            <div>
                Componente el state Ing. {this.props}
            </div>
        );
    }
};

export default Badge; 