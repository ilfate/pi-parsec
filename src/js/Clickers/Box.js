import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import Svg from '../../svg/Svg';

@inject("store")
@observer
class Box extends Component {

    @observable progress = 0;

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    @action onClick() {
        const { store, location, goal, nextStep, onFinished } = this.props;
        if (this.progress < goal) {
            store.increment();
            this.progress++;
        } else {
            // store.chapter.scene.stepFinished(nextStep);
            onFinished();
        }
        // if (this.progress >= goal) {
        //
        // }
    }

    render() {
        console.log(this.progress);
        const { store, location, goal } = this.props;

        return (
            <div className="box-clicker"
                 style={location.styles}
               onClick={this.onClick}
            >
                {this.progress}
                <Svg name={Svg.LINE} animateProgress={this.progress / goal * 100} location={location} />
                <Svg name={Svg.LINE_TOP} animateProgress={this.progress / goal * 100} location={location} />
                <Svg name={Svg.LINE_RIGHT} animateProgress={this.progress / goal * 100} location={location} />
                <Svg name={Svg.LINE_BOTTOM} animateProgress={this.progress / goal * 100} location={location} />
            </div>
        );
  }
}

export default Box;
