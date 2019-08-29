import React, { Component } from 'react';
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
        //   src={this.props.badge.avatarUrl}
        //   alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
              Nombre
            {/* {this.props.badge.firstName} {this.props.badge.lastName} */}
          </strong>
          Cargo
          {/* <br />@{this.props.badge.twitter} */}
          <br />
          Info documento
          {/* {this.props.badge.jobTitle} */}
        </div>
      </div>
    );
  }
}


class BadgeList extends Component {
    render() {
        return(
            <div>
                Componente Carousel
            </div>
        );
    }
};

export default BadgeList; 