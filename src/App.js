import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import CharacterCreate from './Components/CharacterCreate';
import CharacterList from './Components/CharacterList';
import Dice from './Components/Dice';
import Settings from './Components/Settings';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faThList,
  faDiceD20,
  faCog,
  faArrowLeft,
  faDiceD6
} from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus, faThList, faDiceD20, faCog, faArrowLeft, faDiceD6);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/CharacterCreate" component={CharacterCreate} />
          <Route path="/CharacterList" component={CharacterList} />
          <Route path="/Dice" component={Dice} />
          <Route path="/Settings" component={Settings} />
        </Router>
      </div>
    );
  }
}

export default App;
