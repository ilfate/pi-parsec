import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Svg from "./Svg";



class SvgLengths extends Component {

    //document.getElementsByClassName('svg-line')[0].children[0].getTotalLength()

    componentDidMount()
    {
        Svg.List.map(name => {
            console.log(name, document.getElementsByClassName('svg-' + name)[0].children[0].getTotalLength());
        });
    }

    render() {
        return (
            <div>{ Svg.List.map(name => <Svg key={name} name={name} />) }</div>
        );
    }

}



export default SvgLengths;