import React from 'react';
// import ReacDOM from 'react-dom';

import './styles/Home.css';
import data from '../data.json';



class Loader extends React.Component {
componentDidMount() {
    
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