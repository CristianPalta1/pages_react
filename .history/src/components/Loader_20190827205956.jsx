import React from 'react';
// import ReacDOM from 'react-dom';

import './styles/Home.css';
import data from '../data.json';



class Loader extends React.Component {
state = {
    data: {},
};

    //Aqui inicio la llamada a la api
    //Como no se cuando va a responder a mi solicitud
    //Creo una funcion async await "Asincrona"
componentDidMount() {
    this.fetchPersonajes()
}

fetchPersonajes = async () => {
    //Uso fetch es una funcion que trae los navegadore sy el lenguage
    //que si se le pasa una direccion de internet se hara una peticion get
    const response = await fetch()
    const data = await response.json();

    this.setState({
        data:data
    })
}

    render(){
        return(
            <div className="container" >
                <div className="row">
                    {data.results.map( personaje => (
                        <li className = "col-6 col-md-3" key= {personaje.id}>
                            <CharacterCard personaje={personaje} />
                        </li>
                    ))};
                </div>

            </div>
        );
    }
}

export default Loader;