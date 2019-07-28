import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';
// import { characters } from '/backend/db';
import * as firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

import Home from './Components/Home';
import CharacterCreate from './Components/CharacterCreate';
import CharacterList from './Components/CharacterList';
import Dice from './Components/Dice/Dice';
import Settings from './Components/Settings';

import './scss/style.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faThList,
  faDiceD20,
  faCog,
  faArrowLeft,
  faDiceD6,
  faArrowRight,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserPlus,
  faThList,
  faDiceD20,
  faCog,
  faArrowLeft,
  faArrowRight,
  faDiceD6,
  faLightbulb
);

class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
      lightTheme: localStorage.getItem('lightTheme') || false,
      characters: []
    };
  }
  async componentDidMount() {
    this.setTheme();
    const characters = await this.getCharacterData();
    this.setState({ characters });
  }

  getCharacterData = async () => {
    const URL = 'https://crit-fail.firebaseio.com/data.json';
    const characters = await axios
      .get(URL)
      .then(res => {
        return res.data.characters;
      })
      .catch(err => {
        console.log(err);
      });

    const classes = await axios
      .get(URL)
      .then(res => {
        return res.data.classes;
      })
      .catch(err => {
        console.log(err);
      });

    const races = await axios
      .get(URL)
      .then(res => {
        return res.data.races;
      })
      .catch(err => {
        console.log(err);
      });

    const characterArr = characters;
    characterArr.map(character => {
      character.race = races[character.race];
      character.class = classes[character.class];
      return character;
    });
    return characterArr;
  };

  handleToggleTheme() {
    const themeState = !this.state.lightTheme;
    this.setState({
      lightTheme: themeState
    });
    localStorage.setItem('lightTheme', themeState);
  }
  componentDidUpdate() {
    this.setTheme();
  }
  setTheme() {
    if (this.state.lightTheme) {
      document.documentElement.style = `
        --color-base: var(--mono-100);
        --color-primary: var(--mono-09);
        --color-neutral-01: var(--mono-17);
        --color-neutral-02: var(--mono-33);
        --color-neutral-03: var(--mono-54);

        --icon-filter: invert(1);
      `;
    } else {
      document.documentElement.style = `
      --color-base: var(--mono-09);
      --color-primary: var(--mono-100);
      --color-neutral-01: var(--mono-54);
      --color-neutral-02: var(--mono-33);
      --color-neutral-03: var(--mono-17);
    
      --icon-filter: initial;
      `;
    }
  }
  render() {
    const characters = this.state.characters;
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/CharacterCreate" component={CharacterCreate} />
          <Route
            path="/CharacterList"
            render={routeProps => (
              <CharacterList {...routeProps} characters={characters} />
            )}
          />
          <Route path="/Dice" component={Dice} />
          <Route
            path="/Settings"
            render={routeProps => (
              <Settings
                {...routeProps}
                handleToggleTheme={() => this.handleToggleTheme()}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
