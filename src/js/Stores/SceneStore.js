import { observable, action } from "mobx";


class SceneStore {
    @observable name = '';
    @observable progress = 0;

    @action.bound setName(chapter) {
        this.name = chapter;
    }

    @action.bound increment() {
        console.log('s');
        this.progress++;
    }
}


export default SceneStore;
