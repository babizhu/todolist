'use strict';
import React from "react";
import ReactDom from "react-dom"
export default class TodoItem extends React.Component {

    t1() {
        //console.log("mouseover " + this.props.text);
    }

    t2() {
        //console.log("mouseout " + this.props.isDone);
    }

    // 处理任务是否完成状态
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    // 鼠标移入
    handlerMouseOver() {
        ReactDom.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    }

    // 鼠标移出
    handlerMouseOut() {
        ReactDom.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }

    // 删除当前任务
    handlerDelete() {
        this.props.deleteTodo(this.props.index);
    }

    render() {
        //console.log( "this.props.todos.length = " + this.props.todos.length);
        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};

        return (
            <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)}/>
                <span style={doneStyle} onMouseOver={this.t1.bind(this)}
                      onMouseOut={this.t2.bind(this)}>{this.props.text}</span>
                <button ref="deleteBtn" onClick={this.handlerDelete.bind(this)} style={{'display': 'none'}}
                        className="fr">删除
                </button>
            </li>
        )
    }
}