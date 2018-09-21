import { observable, action } from "mobx";


class ChapterStore {
    @observable name = '';

    @action.bound setName(chapter) {
        this.name = chapter;
    }
}


export default ChapterStore;
