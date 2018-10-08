import React, { Component } from 'react';
import SceneWhatAmI from "./Scene-1-WhatAmI/SceneWhatAmI";
import { inject } from "mobx-react";

const SCENE_1 = 'who am I';

@inject("store")
class ChapterIntro extends Component {

    constructor(props) {
        super(props);

        if (!props.store.chapter.scene.name) {
            props.store.chapter.scene.name = SCENE_1;
        }
    }

    render() {
        const { scene } = this.props.store.chapter;
        let content;
        switch (scene.name) {
            case SCENE_1:
                content = <SceneWhatAmI />;
                break;
        }

        return (
            content
        );
    }

    static get SCENE_1() { return SCENE_1; }
}

export default ChapterIntro;