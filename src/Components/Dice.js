import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dice.scss';

export default class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        <header>
          <Link to="/">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </Link>
          <h1>Dice</h1>
        </header>
        <section>
          <p>Swipe to roll, or tap for more options.</p>
          <Link to="/DiceRoller/4">
            <div className="d4">
              <FontAwesomeIcon icon="dice-d6" size="lg" />
              D4
            </div>
          </Link>
          <Link to="/DiceRoller/6">
            <div>
              <FontAwesomeIcon icon="dice-d6" size="lg" />
              D6
            </div>
          </Link>
          <Link to="/DiceRoller/8">
            <div>
              <FontAwesomeIcon icon="dice-d6" size="lg" />
              D8
            </div>
          </Link>
          <Link to="/DiceRoller/10">
            <div>
              <FontAwesomeIcon icon="dice-d6" size="lg" />
              D10
            </div>
          </Link>
          <Link to="/DiceRoller/12">
            <div>
              <FontAwesomeIcon icon="dice-d6" size="lg" />
              D12
            </div>
          </Link>
          <Link to="/DiceRoller/20">
            <div className="d20">
              <FontAwesomeIcon icon="dice-d20" size="lg" />
              D20
              <p>Quick Roll</p>
            </div>
          </Link>
        </section>
      </div>
    );
  }
}
