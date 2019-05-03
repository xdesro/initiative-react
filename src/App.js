import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import CharacterCreate from './Components/CharacterCreate';
import CharacterList from './Components/CharacterList';
import Dice from './Components/Dice';
import Settings from './Components/Settings';
import './App.scss';
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

    this.state = {
      lightTheme: localStorage.getItem('lightTheme') || false,
      settings: {}
    };
  }
  handleToggleTheme() {
    const themeState = !this.state.lightTheme;
    this.setState({
      lightTheme: themeState
    });
    localStorage.setItem('lightTheme', themeState);
  }
  componentDidMount() {
    this.toggleTheme();
  }
  componentDidUpdate() {
    this.toggleTheme();
  }
  toggleTheme() {
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
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/CharacterCreate" component={CharacterCreate} />
          <Route path="/CharacterList" component={CharacterList} />
          <Route path="/Dice" component={Dice} />
          <Route
            path="/Settings"
            render={routeProps => (
              <Settings
                {...routeProps}
                {...this.state}
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
