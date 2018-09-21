import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from "mobx";


@observer
class TextClicker extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { store, location } = this.props;
        store.increment();
    }

    render() {
        const { store, location, text } = this.props;
        let total = 0;
        let currentLine = '';
        text.map(line => {
            let totalWas = total;
            const length = line.split(' ').length;
            total += length;
            if (!currentLine && total >= store.progress) {
                const diff = store.progress - totalWas;
                currentLine = line.split(' ').slice(0, diff).join(' ');
            }
        });


        return (
            <div className="text-clicker"
               style={location.styles}
               onClick={this.onClick}
            >{currentLine}</div>
        );
  }
}

export default TextClicker;
