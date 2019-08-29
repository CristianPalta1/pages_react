//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';
import Badge from './Forms';

handleChange = e => {

};

handleClick = e => {

}

handleSubmit = e => {

}


class Forms extends React.Component {
        this.state = {
            ingresoDoc: [
                {
                    nombre: "Cristian",
                    numRadicado: 2,
                    novedad: "Ninfuna",
                    departamento: "Ingeniera",
                }
            ]
        };
        return (
        <div>
            <Badge nombre={state.ingresoDoc[0].nombre} />

        </div>
        );
    }
}
;

export default Forms; 