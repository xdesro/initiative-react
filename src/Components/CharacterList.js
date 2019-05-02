import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/pages/CharacterList.scss';
import ViewHeader from './ViewHeader';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: 'Garrow Hardcheese',
          level: 3,
          type: 'Halfling Rogue'
        },
        {
          name: 'Mella Brightwood',
          level: 3,
          type: 'Half-elf Rogue'
        },
        {
          name: 'Long Name von Strugglethorpe',
          level: 20,
          type: 'Dwarf Fighter'
        }
      ]
    };
  }
  render() {
    return (
      <div className="CharacterList">
        <ViewHeader header="Character List" doesFade={true} />
        <div className="body">
          {this.state.characters.map(character => {
            return (
              <section key={character.name}>
                <h3>{character.name}</h3>
                <p className="character-description">
                  Level {character.level} {character.type}
                </p>
              </section>
            );
          })}
        </div>
        <footer>
          <Link to="/CharacterCreate">
            <button>Create New Character</button>
          </Link>
        </footer>
      </div>
    );
  }
}
