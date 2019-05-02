import React, { Component } from 'react';
import '../scss/pages/Settings.scss';
import ViewHeader from './ViewHeader';

export default class Settings extends Component {
  render() {
    return (
      <div className="Settings">
        <ViewHeader header="Settings" />
      </div>
    );
  }
}
