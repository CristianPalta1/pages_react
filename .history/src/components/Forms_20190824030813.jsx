//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';
import Badge from './Forms';

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

function Forms(props) {
    
        return (
            <div>
              <Badge nombre={}/>
              
            </div>
        );
};

export default Forms; 