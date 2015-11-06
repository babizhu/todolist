/**
 * Created by YikaJ on 15/6/16.
 * https://github.com/facebook/react/blob/master/examples/quadratic/example.js的一个例子
 * 功能点
 *  1、演示了一个系统事件函数的调用，如何传递额外的参数
 *  <input type="number" value={a} onChange={this.handleInputChange.bind(this, 'a','第二个参数')} />
 *
 *  2、如何用html显示简单的公式
 *
 *  3、演示了一个addons---React.addons.CSSTransitionGroup的应用，这是一个动画应用，不过似乎
 *  http://react-component.github.io/queue-anim/  更好
 *
 */
'use strict';
import React from 'react/addons';
import LocalDb from "localDb";

import TodoHeader from "./TodoHeader.js";
import TodoMain from "./TodoMain.js";
import TodoFooter from "./TodoFooter.js";
import ReactDom from "react-dom"

let INTERVAL = 1000;
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            current: 0
        };

    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), INTERVAL);
    }

    tick() {
        this.setState({current: this.state.current + 1});
    }

    render() {
        let CSSTransitionGroup = React.addons.CSSTransitionGroup;

        var INTERVAL = 2000;
        let children = [];
        let pos = 0;
        let colors = ['red', 'gray', 'blue'];
        for (var i = this.state.current; i < this.state.current + colors.length; i++) {
            var style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(<div key={i} className="animateItem" style={style}>{i}</div>);
        }
        return (

            <div>
                <h1>Example with Transitions</h1>

                <div id="container">
                    <p>
                        To install React, follow the instructions on
                        <a href="https://github.com/facebook/react/">GitHub</a>.
                    </p>

                    <p>
                        If you can see this, React is not working right.
                        If you checked out the source from GitHub make sure to run <code>grunt</code>.
                    </p>
                </div>
                <h4>Example Details</h4>

                <p>This is written with JSX and transformed in the browser.</p>

                <p>
                    Learn more about React at
                    <a href="https://facebook.github.io/react" target="_blank">facebook.github.io/react</a>.
                </p>
                =================================================================================
                <CSSTransitionGroup
                    className="animateExample"
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}
                    transitionName="example">
                    {children}
                </CSSTransitionGroup>
                <div>aaaaaaaaaaaaabbbbbbbbbbbbbbbbbbb</div>
            </div>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("app"));