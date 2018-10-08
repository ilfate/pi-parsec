import { observable, action } from "mobx";


class SceneStore {
    @observable name = '';
    @observable status = '';

    @action.bound setName(chapter) {
        this.name = chapter;
    }
    @action.bound stepFinished(nextStep) {
        this.status = nextStep;
    }


}


export default SceneStore;
