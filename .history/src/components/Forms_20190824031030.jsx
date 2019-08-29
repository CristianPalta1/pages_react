//Renderizar datos tipo funcion
//EN este componente pasare los datos al Componente Badge, con los props

import React from 'react';
import Badge from './Forms';



function Forms(props) {
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
    
        return (
            <div>
              <form>
                <label>
                    Name:
                    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            </div>
        );
};

export default Forms; 