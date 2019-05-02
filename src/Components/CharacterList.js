import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/pages/CharacterList.scss';

import ViewHeader from './ViewHeader';
import CharacterListItem from './CharacterListItem';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          system: 'dnd',
          version: 5,
          name: 'Garrow Hardcheese',
          level: 3,
          race: 'Halfling',
          class: 'Rogue'
        },
        {
          system: 'warhammer',
          name: 'Mella Brightwood',
          level: 3,
          race: 'Half-elf',
          class: 'Rogue'
        },
        {
          system: 'dnd',
          version: 4,
          name: 'Long Name von Strugglethorpe',
          level: 20,
          race: 'Dwarf',
          class: 'Fighter'
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <ViewHeader header="Character List" doesFade={true} />
        <div className="container">
          {this.state.characters.map(character => {
            return <CharacterListItem {...character} />;
          })}
        </div>
        <footer className="container container--bottom">
          <Link to="/CharacterCreate" className="button">
            Create New Character
          </Link>
        </footer>
      </React.Fragment>
    );
  }
}
