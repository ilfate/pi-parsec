import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import Svg from '../../svg/Svg';

@inject("store")
@observer
class RandomCurve extends Component {

    @observable progress = 0;
    @observable log = '';
    @observable target = {x:0, y:0};
    //@observable start = {x:0, y:0};
    @observable lengths = [];
    @observable seeds = [];

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.afterRender = this.afterRender.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount(){
        console.log('mount');
    }

    @action onClick(e) {
        const { location } = this.props;
        this.length = 0;
        this.progress = 0;
        let target = {};
        target.x = e.nativeEvent.offsetX / location.width;
        target.y = e.nativeEvent.offsetY / location.height;
        this.target = target;
        this.seeds = [Math.random(), Math.random(), Math.random(), Math.random()];
        setTimeout(this.afterRender, 10);
    }

    @action afterRender() {
        [0,1,2,3].map((key) =>
            this.lengths[key] = document.getElementById('svg-id-' + key).children[0].getTotalLength()
        )
        setTimeout(this.animate, 10);
    }

    @action animate() {
        this.progress = 100;
    }

    render() {

        const { location } = this.props;

        const starts = [
            {x:0,y:0},
            {x:1,y:0},
            {x:0,y:1},
            {x:1,y:1}
        ];

        return (
            <div className="box-clicker"
                 style={location.styles}

            >

                        <Svg onClick={this.onClick} id={key}
                             length={this.lengths[key]}
                             seeds={this.seeds}
                             start={starts[key]}
                             name={Svg.RANDOM_CURVE}
                             animateProgress={this.progress}
                             location={location}
                             target={this.target} />
                    )}

            </div>
        );
  }
}

export default RandomCurve;
