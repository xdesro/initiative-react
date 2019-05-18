import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CharacterListItem extends Component {
  render() {
    return (
      <div className="character-list-item">
        <img
          className="character-list-item__system-icon"
          src={require('../img/icon-dnd.png')}
          alt="Dungeons &amp; Dragons icon"
        />
        <div className="character-list-item__content">
          <div className="character-list-item__name">{this.props.name}</div>
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
    );
  }
}
