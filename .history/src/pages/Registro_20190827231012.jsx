import React from "react";

import './styles/Badge.css';

// import Navbar from '../components/Navbar'
import Registros from "../components/Registros";
import BadgeList from '../components/BadgeList';
import Badge from '../components/Badge';

import api from ''

class Registro extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        form: {
          Nambe: '',
          Departamento: '',
          Email: '',
          Pass: ''
          
        },
      };
      
      componentDidMount() {
        //Comienza la peticion
        this.fetchPersonajes();
      }
    
      fetchPersonajes = async () => {
        this.setState({ loading: true, error: null })
        try {
          const data = []
          //Guardo los datos en el stado
          this.setState({loading: false, data: data})
        }catch (error){
          this.setState({loading: false, error:error})
        }
      }

      handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
  render() {
    if(this.state.loading === true) {
      return 'Loading ....'
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          {/* <img className="img-fluid" src={header} alt="Logo" /> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              {/* MOstrar ficha registro */}
              <Badge
                Name={this.state.form.Name}
                Departamento={this.state.form.Departamento}
                Email={this.state.form.Email}
                // jobTitle={this.state.form.jobTitle}
                // email={this.state.form.email}
                // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <Registros
               onChange={this.handleChange}
               formValues={this.state.form}
              />
            </div>
          </div>
          <BadgeList badges={this.state.data} />
           
        </div>
      </React.Fragment>
    );
  }
}

export default Registro;
