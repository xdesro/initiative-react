import React, { Component } from 'react';
import ViewHeader from './ViewHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <ViewHeader header="Settings" />
        <div className="container">
          <ul className="list">
            <li className="list__item">
              <button
                className="button button--icon button--outline"
                onClick={this.props.handleToggleTheme}
              >
                <FontAwesomeIcon
                  className="button__icon"
                  icon="lightbulb"
                  size="lg"
                />
                {this.props.lightTheme ? 'Dark' : 'Light'} Mode
              </button>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
