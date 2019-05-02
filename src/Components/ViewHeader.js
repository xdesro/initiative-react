import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ViewHeader extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <header
        className={
          'view-header ' + (this.props.doesFade ? 'view-header--fade' : '')
        }
      >
        <Link className="view-header__icon" to="/">
          <FontAwesomeIcon icon="arrow-left" size="lg" />
        </Link>
        <h1 className="view-header__title">{this.props.header}</h1>
      </header>
    );
  }
}
