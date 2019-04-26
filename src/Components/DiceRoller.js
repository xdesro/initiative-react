import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DiceRoller.scss';

export default class DiceRoller extends Component {
  render() {
    return (
      <div className="DiceRoller">
        <header>
          <Link to="/Dice">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </Link>
          <h1>Dice Roller</h1>
        </header>
      </div>
    );
  }
}
