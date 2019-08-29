import React from 'react';
// import ReacDOM from 'react-dom';

import './styles/Api.css';
// import data from '../data.json';


function CharacterCard(props) {
    const { personaje } = props;

    return (
        <div>
            className="CharacterCard"
            style = {{}}
        </div>
    )
}


class Loader extends React.Component {
state = {
    data: {
        results: [],
    },
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
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json();

    this.setState({
        data:data
    })
}

    render(){
        return(
            <div className="container" >
                <div className="row">
                    {this.state.data.results.map( personaje => (
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