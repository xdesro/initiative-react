import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Initiative</code>
          </p>
        </header>
        <section>
          <Link to="/CharacterCreate">
            <div>
              <FontAwesomeIcon icon="user-plus" />
              <p>Create New Character</p>
            </div>
          </Link>
          <Link to="/CharacterList">
            <div>
              <FontAwesomeIcon icon="th-list" />
              <p>Character List</p>
            </div>
          </Link>
          <Link to="/Dice">
            <div>
              <FontAwesomeIcon icon="dice-d20" />
              <p>Dice</p>
            </div>
          </Link>
          <Link to="/Settings">
            <div>
              <FontAwesomeIcon icon="cog" />
              <p>Settings</p>
            </div>
          </Link>
        </section>
      </div>
    );
  }
}
