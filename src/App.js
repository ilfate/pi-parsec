import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Game from "./js/Game.js";
import DevTools from 'mobx-react-devtools';
import SvgLengths from "./svg/SvgLengths";

class App extends Component {
  render() {
    return (
        <div className="game-root">
            <BrowserRouter>
                <Switch>
                    <Route path="/svg" component={SvgLengths}/>
                    <Route path="/" component={Game}/>
                </Switch>
            </BrowserRouter>
            <DevTools/>
        </div>
);
  }
}

export default App;
