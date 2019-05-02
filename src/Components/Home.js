import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/pages/Home.scss';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="app-logo">
          <img src={logo} className="app-logo__icon" alt="logo" />
          <div className="app-logo__name">Initiative</div>
        </div>
        <section className="navigation list">
          <Link to="/CharacterCreate" className="list__item list__item--icon">
            <FontAwesomeIcon icon="user-plus" />
            <p>Create New Character</p>
          </Link>
          <Link to="/CharacterList" className="list__item list__item--icon">
            <FontAwesomeIcon icon="th-list" />
            <p>Character List</p>
          </Link>
          <Link to="/Dice" className="list__item list__item--icon">
            <FontAwesomeIcon icon="dice-d20" />
            <p>Dice</p>
          </Link>
          <Link to="/Settings" className="list__item list__item--icon">
            <FontAwesomeIcon icon="cog" />
            <p>Settings</p>
          </Link>
        </section>
      </React.Fragment>
    );
  }
}
