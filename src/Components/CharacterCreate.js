import React, { Component } from 'react';
import axios from 'axios';
import ViewHeader from './ViewHeader';

export default class CharacterCreate extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.races);
  }

  handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newCharObj = {};
    for (var pair of formData.entries()) {
      if (pair[0] === 'race') {
        console.log(this.props.races);
        console.log(this);
        // newCharObj[pair[0]] = this.props.races[pair[1]];
      }
      if (pair[0] === 'class') {
        // newCharObj[pair[0]] = this.props.classes[pair[1]];
      } else {
        newCharObj[pair[0]] = pair[1];
      }
    }
    console.log(newCharObj);

    const URL = 'https://crit-fail.firebaseio.com/data/characters.json';

    await axios
      .post(URL, newCharObj)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
                type="text"
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
