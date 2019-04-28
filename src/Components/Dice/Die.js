import React, { Component } from 'react';
import './Dice.scss';

export default class Die extends Component {

  state = {
    rollValue: "",
  }

  rollDice = (e) => {
    let values = [];
    let sides = parseInt(e.currentTarget.className.replace(/[^0-9]/g, ''));
    let i;
    for (i = 1; i <= sides; i++) {
      values.push(i);
    }
    const rollValue = values[Math.floor(Math.random() * values.length)]
    this.setState({ rollValue });
  }

  render() {
    let { die } = this.props;
    let { rollValue } = this.state;
    return (
      <div>
        <button
          className={`d${die}`}
          onClick={this.rollDice}>
          <img src={require(`../../assets/img/icon-d${die}.png`)} alt={`D${die}`} />
          D{die}
        </button>
        {rollValue}
      </div>
    );
  }
}
