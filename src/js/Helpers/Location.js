import { observable, action, computed } from "mobx";

const TYPE_CUSTOM = 'custom',
 TYPE_CENTER = 'center';

export default class Location {
    @observable type = TYPE_CUSTOM;
    @observable left = 0;
    @observable top = 0;

    @computed
    get styles() {
        switch (this.type) {
            case TYPE_CENTER:
                return {'margin': '0 auto', 'left': 0, 'right': 0, top: 150};
                break;
            case Location.TYPE_CUSTOM:
                return {'margin': `${this.top > 0 ? this.top + 'px' : 0} 0 0 ${this.left > 0 ? this.left + 'px' : 0}`};
                break;
            default:
                return {};
        }
    }

    @action
    setType(type) {
        this.type = type;
    }

    static get TYPE_CUSTOM() { return TYPE_CUSTOM; }
    static get TYPE_CENTER() { return TYPE_CENTER; }
}