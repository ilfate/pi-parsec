import React, { Component } from 'react';

const CHAPTER_INTRO = '001-intro',
    TYPE_CENTER = 'center';

class ChapterManager extends Component {



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

    static get TYPE_CUSTOM() { return TYPE_CUSTOM; }
}

export default ChapterManager;
