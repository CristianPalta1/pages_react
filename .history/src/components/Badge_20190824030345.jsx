//Aqui mostrare el formulario 

import React, { Component } from 'react';
import Forms from './Forms';



class Badge extends Component {
    render() {
        return(
            <div>
                Componente Badge
                <Forms nombre="Cristian" />
            </div>
        );
    }
};

export default Badge; 