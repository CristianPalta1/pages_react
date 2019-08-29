import React from "react";
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
            
            {this.props.badges.Name}
          </strong>
          
          <br />@{this.props.badges.Departamento}
          <br />
        
          {this.props.badges.Email}
        </div>
      </div>
    );
  }
}

class BadgeList extends Component {
  render() {

    if(this.props.badges)


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
