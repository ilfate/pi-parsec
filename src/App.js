import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from "./js/Game.js";
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (

      <div className="game-root">
          <div className="menu"></div>
          <Game/>
          <DevTools/>
      </div>
    );
  }
}

export default App;
