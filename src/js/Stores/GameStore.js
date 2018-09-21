import { observable, action } from "mobx";


class GameStore {
    @observable clicks = 0;
    @observable isTestMode = false;
    @observable currentChapter;

    @action.bound increment() {
        this.clicks++;
    }

    @action.bound setChapter(chapter) {
        this.currentChapter = chapter;
    }
}


export default GameStore;
