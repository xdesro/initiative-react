import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CharacterListItem extends Component {
  render() {
    return (
      <Link to={{
        pathname: '/CharacterCreate',
        state: {
          character: { ...this.props },
          newCharacter: false,
        }
      }}>
        <div className="character-list-item">
          <img
            className="character-list-item__system-icon"
            src={require('../assets/img/icon-dnd.png')}
            alt="Dungeons &amp; Dragons icon"
          />
          <div className="character-list-item__content">
            <div className="character-list-item__name">
              <span>{this.props.name.first}</span>&nbsp;
            <span>{this.props.name.last}</span>
            </div>
            <div className="character-list-item__stats">
              <span>Level {this.props.level} </span>
              <span>{this.props.race} </span>
              <span>{this.props.class} </span>
            </div>
          </div>
          <FontAwesomeIcon
            className="character-list-item__navigation"
            icon="arrow-left"
            size="lg"
          />
        </div>
      </Link >
    );
  }
}
