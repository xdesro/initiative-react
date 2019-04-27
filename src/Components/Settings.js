import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../scss/pages/Settings.scss';

export default class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <header>
          <Link to="/">
            <FontAwesomeIcon icon="arrow-left" size="lg" />
          </Link>
          <h1>Settings</h1>
        </header>
      </div>
    );
  }
}
