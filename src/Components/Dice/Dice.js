import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Die from './Die';
import './Dice.scss';

export default class Dice extends Component {

  render() {
    const dice = ['4', '6', '8', '10', '12', '20'];
    return (
      <div className="dice">
        <header>
          <Link to="/">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </Link>
          <h1>Dice</h1>
        </header>
        <section>
          <p>Swipe to roll, or tap for more options.</p>
          {
            dice.map(die => {
              return (<Die
                key={die}
                die={die}
              />)
            })
          }
        </section>
      </div>
    );
  }
}
