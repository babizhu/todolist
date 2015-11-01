/**
 * Created by liukun on 15/6/16.
 * 一个页面有两个类的情况
 *
 */
'use strict';
import React from "react";
import LocalDb from "localDb";

import TodoHeader from "./TodoHeader.js";
import TodoMain from "./TodoMain.js";
import TodoFooter from "./TodoFooter.js";
import ReactDom from "react-dom"

class TodoItem extends React.Component {
    render() {
        let i = 0;
        let r = this.props.items.map(item=> {
            return <li key={++i}>{item}</li>
        })
        return (<div>{r}</div>);
    }
}
class App extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {

    }

    state = {
        todos: ["a", "b"],
    }
    static propTypes = {
        //title: React.PropTypes.string.isRequired
    }
    static defaultProps = {
        //name: 'liukun',
    }

    buttonClick() {
        //console.log();
        let newValue = this.refs.newText.value;
        this.state.todos.push(newValue);
        this.setState({todos:this.state.todos})
        this.refs.newText.value="";

    }

    render() {
        //var someArray = [ "a", "b"];

        return (
            <div>
                father <TodoItem items={this.state.todos}/>
                <input type="text" ref="newText"/>
                <button onClick={this.buttonClick.bind(this)}>click</button>
            </div>
        )
    }
}

ReactDom.render(<App title='刘老爷'/>, document.getElementById("app"));