import { observable, action } from "mobx";
import SceneStore from "./SceneStore";


const sceneStore = new SceneStore();

class ChapterStore {
    @observable name = '';
    @observable scene = sceneStore;

    @action.bound increment() {
        this.scene.increment();
        console.log('c');
    }

    @action.bound setName(chapter) {
        this.name = chapter;
    }

    @action.bound setScene(scene) {
        this.scene = scene;
    }
}


export default ChapterStore;
