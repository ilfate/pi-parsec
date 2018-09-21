import React, { Component } from 'react';
import TextClicker from "./Clickers/TextClicker";
import GameStore from "./Stores/GameStore";
import Location from "./Helpers/Location";


const gameStore = new GameStore();

class Game extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    let textClickerLocation = new Location();
    // textClickerLocation.type = Location.TYPE_CENTER;
    textClickerLocation.top = 15;
    textClickerLocation.left = 500;

    return (
        <div className="game-container">
            <h1 style={{'color':'blue'}}>Game</h1>
            {/*<TextClicker store={gameStore} location={textClickerLocation}/>*/}

        </div>
    );
  }
}

export default Game;
