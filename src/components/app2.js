/**
 * Created by YikaJ on 15/6/16.
 * 这里是一个学习的入口地址,可以自行添加测试代码,并且包含了一些功能函数例如componentDidMount等
 */
'use strict';
import React from "react";
import LocalDb from "localDb";

import TodoHeader from "./TodoHeader.js";
import TodoMain from "./TodoMain.js";
import TodoFooter from "./TodoFooter.js";
import ReactDom from "react-dom"

class App extends React.Component {
    constructor() {
        super();

    }

    componentDidMount () {
        let isUp = false;
    this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        if( isUp ){
            opacity += .05;
        }else{
            opacity -= .05;
        }

        if (opacity < 0.1) {
            //opacity = 1.0;
            isUp = true;
        }else if( opacity > 1){
            isUp = false;
        }
        //console.log( opacity)
        this.setState({
            opacity: opacity
        });
    }.bind(this), 100);
}

    state = {
        opacity: 1.0,
        age: 10
    }
    static propTypes = {
        title: React.PropTypes.string.isRequired
    }
    static defaultProps = {
        name: 'liukun',
    }

    buttonClick() {
        this.state.age++;
        this.setState({age: this.state.age});
    }

    render() {
        return (
            <div>
                <span>Hello World!{this.props.title},your name is {this.props.name},age is {this.state.age}</span>
                <button ref="deleteBtn" onClick={this.buttonClick.bind(this)}>click me</button>
                <br/>
                <div style={{opacity: this.state.opacity,color:'red'}}>
                    Hello {this.props.name}
                </div>
            </div>


        )
    }
}

ReactDom.render(<App title='刘老爷'/>, document.getElementById("app"));