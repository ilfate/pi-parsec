import { observable, action, computed } from "mobx";
import ChapterStore from "./ChapterStore";
import ChapterManager from "../Chapters/ChapterManager";

const chapterStore = new ChapterStore();
chapterStore.setName(ChapterManager.CHAPTER_INTRO);

class GameStore {
    @observable clicks = 0;
    @observable isTestMode = false;
    @observable chapter = chapterStore;

    @action.bound increment() {
        console.log('g');
        this.clicks++;
        this.chapter.increment();
    }

    @action.bound setChapter(chapter) {
        this.chapter = chapter;
    }

    @computed get progress() {
        return this.chapter.scene.progress;
    }
}


export default GameStore;
