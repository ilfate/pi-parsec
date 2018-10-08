import { observable, action, computed } from "mobx";

const TYPE_CUSTOM = 'custom',
 TYPE_CENTER = 'center';

const GAME_WIDTH = 1248,
 GAME_HEIGHT = 800;

export default class Location {
    @observable type = TYPE_CUSTOM;
    @observable width = 100;
    @observable height = 100;
    @observable left = 0;
    @observable top = 0;

    @computed
    get styles() {
        let styles = {};
        switch (this.type) {
            case TYPE_CENTER:
                styles = {'margin': '0 auto', 'left': 0, 'right': 0, top: 150};
                break;
            case Location.TYPE_CUSTOM:
                styles = {'margin': `${this.top > 0 ? this.top + 'px' : 0} 0 0 ${this.left > 0 ? this.left + 'px' : 0}`};
                break;
            default:
                break;
        }
        let size = {width: this.width + 'px', height: this.height + 'px'};

        styles = Object.assign({}, styles, size);
        return styles;
    }

    @action
    setType(type) {
        this.type = type;
    }

    static get TYPE_CUSTOM() { return TYPE_CUSTOM; }
    static get TYPE_CENTER() { return TYPE_CENTER; }
    static get GAME_WIDTH() { return GAME_WIDTH; }
    static get GAME_HEIGHT() { return GAME_HEIGHT; }
}