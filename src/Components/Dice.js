import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ViewHeader from './ViewHeader';

export default class Dice extends Component {
  render() {
    return (
      <div className="Dice">
        <ViewHeader header="Dice Roller" doesFade={true} />
        <section>
          <p>Swipe to roll, or tap for more options.</p>
          <div className="d4">
            <FontAwesomeIcon icon="dice-d6" size="lg" />
            D4
          </div>
          <div>
            <FontAwesomeIcon icon="dice-d6" size="lg" />
            D6
          </div>
          <div>
            <FontAwesomeIcon icon="dice-d6" size="lg" />
            D8
          </div>
          <div>
            <FontAwesomeIcon icon="dice-d6" size="lg" />
            D10
          </div>
          <div>
            <FontAwesomeIcon icon="dice-d6" size="lg" />
            D12
          </div>
          <div className="d20">
            <FontAwesomeIcon icon="dice-d20" size="lg" />
            D20
            <p>Quick Roll</p>
          </div>
        </section>
      </div>
    );
  }
}
