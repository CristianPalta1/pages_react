import React from 'react';

// import Navbar from '../components/Navbar'
import Registros from '../components/Registros'

class Registro extends React.Component {
    render(){
        return(
            <div>
                <React.Fragment>
        <div className="BadgeNew__hero">
          {/* <img className="img-fluid" src={header} alt="Logo" /> */}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
                MOstrar ficha registro
              {/* <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              /> */}
            </div>

            <div className="col-6">
              <Registros
                // onChange={this.handleChange}
                // formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
            </div>
        );
    }
}

export default Registro;