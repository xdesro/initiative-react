import React, { Component } from 'react';
import ViewHeader from './ViewHeader';

export default class CharacterCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {
        name: '',
        race: '',
        class: '',
        level: '',
        system: ''
      },
      newCharacter: false
    };
  }

  componentDidMount() {
    let { character } = this.state;
    let { newCharacter } = this.props;
    if (
      this.props &&
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.character
    ) {
      character = this.props.location.state.character;
      newCharacter = this.props.location.state.newCharacter;
    }
    this.setState({ character, newCharacter });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let { character } = this.state;

    character[name] = value;
    this.setState({ character });
  }

  render() {
    const { character } = this.state;
    return (
      <div className="CharacterCreate">
        {this.state.newCharacter ? (
          <ViewHeader header="New Character" doesFade={true} />
        ) : (
          <ViewHeader header="Character Sheet" doesFade={true} />
        )}
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="form__control">
              <label className="form__label" htmlFor="firstname">
                First Name
              </label>
              <input
                name="name"
                className="form__input"
                placeholder="Adrienne"
                defaultValue={character && character.name ? character.name : ''}
                onBlur={e => this.handleChange(e)}
              />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="race">
                Race
              </label>
              <input
                name="race"
                className="form__input"
                placeholder="Human"
                defaultValue={character.race || ''}
                onBlur={e => this.handleChange(e)}
              />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="class">
                Class
              </label>
              <input
                name="class"
                className="form__input"
                placeholder="Bard"
                defaultValue={character.class || ''}
                onBlur={e => this.handleChange(e)}
              />
            </div>
            <div className="form__control">
              <label className="form__label" htmlFor="level">
                Level
              </label>
              <input
                name="level"
                className="form__input"
                placeholder="4"
                defaultValue={character.level || ''}
                onBlur={e => this.handleChange(e)}
              />
            </div>
            <div className="form__control">
              <label htmlFor="system" className="form__label">
                System
              </label>
              <input
                disabled
                name="system"
                className="form__input"
                defaultValue="D&amp;D 5e"
                onBlur={e => this.handleChange(e)}
              />
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
