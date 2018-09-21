import React, { Component } from 'react';
import {observer} from 'mobx-react';


@observer
class TextClicker extends Component {

    constructor(props) {
        super(props);
    }

    onClick() {
        const { store } = this.props;
        store.increment();
    }

    render() {
        const { store, location } = this.props;
        return (
            <div className="text-clicker"
               style={location.styles}
               onClick={this.onClick}
            >{store.clicks}</div>
        );
  }
}

export default TextClicker;
