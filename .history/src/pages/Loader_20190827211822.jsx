import React from 'react';
// import ReacDOM from 'react-dom';

import './styles/Api.css';
// import data from '../data.json';


function CharacterCard(props) {
    const { personaje } = props;

    return (
        <div className="CharacterCard"
        style = {{ backgroundImage: `url(${personaje.image})`}}>
            <div className = "CharacterCard__name-container text-truncate">
                {personaje.name}
            </div>
        </div>
    );
}


class Loader extends React.Component {
state = {
    loading: true,
    error: null,
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

    this.setState({ loading: true, error: null })

    try{

    }
    
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