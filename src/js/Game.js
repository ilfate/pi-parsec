import React, { Component } from 'react';
import GameStore from "./Stores/GameStore";
import ChapterStore from "./Stores/ChapterStore";
import ChapterManager from "./Chapters/ChapterManager";


const gameStore = new GameStore();

class Game extends Component {

    constructor(props) {
        super(props);
    }

  render() {


    return (
        <div className="game-container">
            <ChapterManager store={gameStore} />

        </div>
    );
  }
}

export default Game;
