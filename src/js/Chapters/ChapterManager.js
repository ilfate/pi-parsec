import React, { Component } from 'react';
import ChapterIntro from "./001-Intro/ChapterIntro";
import { inject } from 'mobx-react';

const CHAPTER_INTRO = '001-intro',
    TYPE_CENTER = 'center';


@inject("store")
class ChapterManager extends Component {

    render() {
        const { store } = this.props;
        const chapterStore = store.chapter;
        let content;
        switch (chapterStore.name) {
            case CHAPTER_INTRO:
                content = <ChapterIntro />;
                break;
        }

        return (
            content
        );
    }

    static get CHAPTER_INTRO() { return CHAPTER_INTRO; }
}

export default ChapterManager;
