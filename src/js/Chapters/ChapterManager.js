import React, { Component } from 'react';
import ChapterIntro from "./001-Intro/ChapterIntro";

const CHAPTER_INTRO = '001-intro',
    TYPE_CENTER = 'center';

class ChapterManager extends Component {



    render() {
        const { store } = this.props;
        const chapterStore = store.chapter;
        let content;
        switch (chapterStore.name) {
            case CHAPTER_INTRO:
                content = <ChapterIntro store={store}/>;
                break;
        }

        return (
            content
        );
    }

    static get CHAPTER_INTRO() { return CHAPTER_INTRO; }
}

export default ChapterManager;
