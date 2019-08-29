import React from 'react';

class Forms extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form action="">
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              // value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="password"
              name="pass"
              // value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              // value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              // value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              // onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              // value={this.props.formValues.twitter}
            />
          </div>

          <button  className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
