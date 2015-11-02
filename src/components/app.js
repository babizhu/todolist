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
        return (<div style={{color:this.props.color}}>{r}</div>);
    }
}
class App extends React.Component {
    constructor() {
        super();

    }
    loadCommentsFromServer(){
        let colors = ['red','blue','yellow','black'];
        let i = parseInt(colors.length*Math.random());

        this.setState({color:colors[i]});
    }
    componentDidMount() {
        this.timer = setInterval(function () {
            this.loadCommentsFromServer();
        }.bind(this), this.props.pollInterval);
    }

    state = {
        todos: ["a", "b"],
        disable:false,

        color:'black'
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

    disableText(){
        this.setState({disable:!this.state.disable});
    }
    render() {
        //var someArray = [ "a", "b"];

        return (
            <div className="panel">
                father <TodoItem items={this.state.todos} color={this.state.color}/>
                <input type="text" ref="newText" disabled={this.state.disable}/>
                <button onClick={this.buttonClick.bind(this)}>click</button>
                <button onClick={this.disableText.bind(this)}>disableText</button>
            </div>
        )
    }
}

ReactDom.render(<App title='刘老爷' pollInterval='1000'/>, document.getElementById("app"));