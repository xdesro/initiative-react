import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ViewHeader from './ViewHeader';
import CharacterListItem from './CharacterListItem';

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters
    };
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <ViewHeader header="Character List" doesFade={true} />
        <div className="container">
          {this.props.characters.map((character, index) => (
            <CharacterListItem {...character} />
          ))}
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
