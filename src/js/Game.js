import React, { Component } from 'react';
import GameStore from "./Stores/GameStore";
import ChapterManager from "./Chapters/ChapterManager";
import { Provider } from "mobx-react";


const gameStore = new GameStore();

class Game extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={gameStore}>

                <div className="game-container">
                    <ChapterManager />

                </div>
            </Provider>
        );
    }
}

export default Game;
