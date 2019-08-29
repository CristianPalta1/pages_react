//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';
import Badge from './Forms';



function Forms(props) {
    
        return (
            <div>
              <Badge nombre={this.state.ingresoDoc[0].nombre}/>
              
            </div>
        );
};

export default Forms; 