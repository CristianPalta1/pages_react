//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';
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

function Forms(props) {
    
        return (
            <div>
              <h1>Soy el formulario Ing. con el state </h1>
              
            </div>
        );
};

export default Forms; 