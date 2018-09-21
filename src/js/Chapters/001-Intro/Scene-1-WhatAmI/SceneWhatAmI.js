import React, { Component } from 'react';
import Location from "../../../Helpers/Location";
import TextClicker from "../../../Clickers/TextClicker";

const text_1 = [
    'uggh... I... I am...',
    'I can think...', 'But I don`t feel... anything...',
    'Who am I?', 'What am I?'
];


class SceneWhatAmI extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const { store } = this.props;

        let textClickerLocation = new Location();
        textClickerLocation.type = Location.TYPE_CENTER;
        // textClickerLocation.top = 15;
        // textClickerLocation.left = 500;

        return (
            <TextClicker store={store} location={textClickerLocation} text={text_1} />
        );
    }
}

export default SceneWhatAmI;