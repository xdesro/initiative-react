import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import CreateCharacter from './Components/CreateCharacter';
import CharacterList from './Components/CharacterList';
import Dice from './Components/Dice';
import Settings from './Components/Settings';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faThList,
  faDiceD20,
  faCog
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus, faThList, faDiceD20, faCog);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/CreateCharacter" component={CreateCharacter} />
          <Route path="/CharacterList" component={CharacterList} />
          <Route path="/Dice" component={Dice} />
          <Route path="/Settings" component={Settings} />
        </Router>
      </div>
    );
  }
}

export default App;
