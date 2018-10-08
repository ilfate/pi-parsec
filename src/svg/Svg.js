import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LINE = 'line-left';
const LINE_TOP = 'line-top';
const LINE_RIGHT = 'line-right';
const LINE_BOTTOM = 'line-bottom';
const LINE_CURVE = 'line-curve';
const RANDOM_CURVE = 'random-curve';


const SIZE = 1024;

const List = [
    LINE,LINE_CURVE
];

let Lengths = {};
Lengths[LINE] = 1024;
Lengths[LINE_TOP] = 1024;
Lengths[LINE_RIGHT] = 1024;
Lengths[LINE_BOTTOM] = 1024;
Lengths[LINE_CURVE] = 1070;



class Svg extends Component {

    render() {
        const { name, location, animateProgress, d, target, start, seeds, id } = this.props;
        let { length } = this.props;
        let style = {};
        let path = '';
        let pathStyle = {"fill": "none", 'stroke': '#12BA34', 'strokeWidth': '1px'};

        if (location.width && !style.width) {
            style.width = location.width;
        }
        if (location.height && !style.height) {
            style.height = location.height;
        }
        if (d != 0) {
            switch (d) {
                case 1: style.transform = 'rotate(90deg)'; break;
                case 2: style.transform = 'rotate(180deg)'; break;
                case 3: style.transform = 'rotate(270deg)'; break;
            }

        }

        if (animateProgress !== -1) {
            // const length = this.getLength(name);
            if (!length) {
                pathStyle.stroke = '#000';
            }
            const step = length / 100;
            pathStyle.strokeDasharray = length;
            pathStyle.strokeDashoffset = length - (step * animateProgress);
        }

        let  pathD = '';
        switch (name) {
            case 'line-left': pathD = "M 0,1024 0,0"; break;
            case 'line-top': pathD = "M 0,0 1024,0"; break;
            case 'line-right': pathD = "M 1024,0 1024,1024"; break;
            case 'line-bottom': pathD = "M 1024,1024 0,1024"; break;
            case 'line-curve': pathD = "M 0,1052.3622 C 64.719946,717.05293 -75.093552,92.179456 207.08127,64.727653"; break;
            case RANDOM_CURVE:
                let startPoint = {x:start.x * SIZE, y: start.y * SIZE};
                let endPoint = {x:target.x * SIZE, y: target.y * SIZE};
                const getApprox = (val, seedId) => containValue(val + (SIZE * (0.1 + seeds[seedId] * 0.2) * (seeds[seedId] > 0.5 ? -1 : 1 )));
                const containValue = (val) => val > SIZE ? (SIZE - (val - SIZE)) : (val < 0 ? -val : val);
                let besierStartPoint = {x: getApprox(start.x * SIZE, 0), y: getApprox(start.y *  SIZE, 1)};

                let besierEndPoint = {x: getApprox(target.x * SIZE, 2), y: getApprox(target.y * SIZE, 3)};
                pathD = `M ${startPoint.x},${startPoint.y} C ${besierStartPoint.x},${besierStartPoint.y} ${besierEndPoint.x},${besierEndPoint.y} ${endPoint.x},${endPoint.y}`;
                break;
        }
        path = <path
            style={pathStyle}
            d={pathD}/>;


        return (<svg onMouseMove={this.props.onClick} xmlns="http://www.w3.org/2000/svg" style={style}
                     className={"svg svg-" + name + (length == 0 || animateProgress !== 100 ? "" : " animated")}
                     preserveAspectRatio="none"
                     id={"svg-id-" + id}
                     viewBox="0 0 1024 1024">{path}</svg>);
    }

    static get LINE() { return LINE; }
    static get LINE_RIGHT() { return LINE_RIGHT; }
    static get LINE_TOP() { return LINE_TOP; }
    static get LINE_BOTTOM() { return LINE_BOTTOM; }
    static get RANDOM_CURVE() { return RANDOM_CURVE; }
    static get List() { return List; }

    getLength(name) {
        if (name === RANDOM_CURVE) {
            return 1000;
        }
        if (Lengths[name]) return Lengths[name];
        throw new Error('Length for SVG with name "' + name + '" is not defined');
    }
}

Svg.propTypes = {
    name: PropTypes.string,
    location: PropTypes.object,
    animateProgress: PropTypes.number,
    d: PropTypes.number
};

Svg.defaultProps = {
    name: 'line',
    location: {},
    animateProgress: -1,
    d: 0
};

export default Svg;