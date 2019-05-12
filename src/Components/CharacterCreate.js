import React, { Component } from 'react';
import ViewHeader from './ViewHeader';

export default class CharacterCreate extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="CharacterCreate">
        <ViewHeader header="New Character" doesFade={true} />
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form__control">
              <label className="form__label" htmlFor="name">
                Character Name
              </label>
              <input
                name="name"
                className="form__input"
                placeholder="Adrienne Ferrier"
              />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="race">
                Race
              </label>
              <input name="race" className="form__input" placeholder="Human" />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="class">
                Class
              </label>
              <input name="class" className="form__input" placeholder="Bard" />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="level">
                Level
              </label>
              <input name="level" className="form__input" placeholder="4" />
            </div>
            <div className="form__control">
              <label htmlFor="system" className="form__label">
                System
              </label>
              <select className="form__input" name="system">
                <option value="dnd5e" selected>
                  D&amp;D 5e
                </option>
              </select>
            </div>
            <div className="form__control">
              <button className="button" type="submit">
                Save Character
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
