import React from 'react';

import Navbar from '../components/Navbar'
import Registros from '../components/Registros'

class Registro extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Registros/>
            </div>
        );
    }
}

export default Registro;