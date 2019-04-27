import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/pages/CharacterCreate.scss';
export default class CharacterCreate extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="CharacterCreate">
        <header>
          <Link to="/">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </Link>
          <h1>New Character</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Character Name</label>
          <input name="name" placeholder="Adrienne Ferrier" />
          <label htmlFor="race">Race</label>
          <input name="race" placeholder="Human" />
          <label htmlFor="class">Class</label>
          <input name="class" placeholder="Bard" />
          <label htmlFor="level">Level</label>
          <input name="level" placeholder="4" />
        </form>
        <button onClick={this.onSubmit}>Save Character</button>
      </div>
    );
  }
}
