import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

@inject("store")
@observer
class TextClicker extends Component {

    @observable progress = 0;

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    @action onClick() {
        const { store, location } = this.props;
        store.increment();
        this.progress ++;
    }

    render() {
        const { store, location, text } = this.props;
        let total = 0;
        let currentLine = '';
        text.map(line => {
            let totalWas = total;
            const length = line.split(' ').length;
            total += length;
            if (!currentLine && total >= this.progress) {
                const diff = this.progress - totalWas;
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
