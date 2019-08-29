//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';

state = {
    ingresoDoc: [
        {
            nombre: "",
            numRadicado: 0
        }
    ]
};

function Forms(props) {
    
        return (
            <div>
              <h1>Soy el formulario Ing. {props.nombre}</h1>
              
            </div>
        );
};

export default Forms; 