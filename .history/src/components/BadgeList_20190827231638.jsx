import React, { Component } from "react";
import "./styles/BadgesList.css";

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        {/* <img
          className="BadgesListItem__avatar"
          //   src={this.props.badge.avatarUrl}
          //   alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        /> */}

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
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgeListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgeList;
