import React from 'react';
// import ReacDOM from 'react-dom';

import './styles/Home.css';
import data from '../data.json';



class Loader extends React.Component {
    render(){
        return(
            <div className="container" >
                <div className="row">
                    {data}
                </div>

            </div>
        );
    }
}