import React, { Component } from 'react';
import Location from "../../../Helpers/Location";
import TextClicker from "../../../Clickers/TextClicker";
import { observer, inject } from "mobx-react";
import Box from "../../../Clickers/Box";
import { observable, action } from "mobx";
import RandomCurve from "../../../Clickers/RandomCurve";

const text_1 = [
    'uggh... I... I am...',
    'I can think...', 'But I don`t feel... anything...',
    'Who am I?', 'What am I?'
];




@inject("store")
@observer
class SceneWhatAmI extends Component {

    @observable status = 'loading';

    constructor(props) {
        super(props);
        this.text = this.text.bind(this);
        this.box = this.box.bind(this);
    }


    text() {
        const { store } = this.props;
        let textClickerLocation = new Location();
        textClickerLocation.type = Location.TYPE_CENTER;
        textClickerLocation.width = Location.GAME_WIDTH - 400;
        textClickerLocation.height = Location.GAME_HEIGHT - 300;
        // textClickerLocation.left = 500;

        return (
            <TextClicker location={textClickerLocation} text={text_1} />
        );
    }
    box() {
        const { store } = this.props;
        let boxClickerLocation = new Location();
        boxClickerLocation.type = Location.TYPE_CENTER;
        boxClickerLocation.width = Location.GAME_WIDTH - 400;
        boxClickerLocation.height = Location.GAME_HEIGHT - 300;

        return (
            <Box location={boxClickerLocation} goal={20} nextStep={'text'} onFinished={() => this.status = 'text'}/>
        );
    }
    randomCurve() {
        const { store } = this.props;
        let boxClickerLocation = new Location();
        boxClickerLocation.type = Location.TYPE_CENTER;
        boxClickerLocation.width = 600;
        boxClickerLocation.height = 600;

        return (
            <RandomCurve location={boxClickerLocation} goal={20} />
        );
    }

    @action.bound progress(name) {
        this.status = name;
    }

    render() {
        const { store } = this.props;

        // switch (store.chapter.scene.status) {
        switch (this.status) {
            case '':
            case 'loading':
                return this.randomCurve();
            case 'text':
                return this.text();
            default:
                // return this.text();
                break;
        }

    }
}

export default SceneWhatAmI;