/**
 * Created by YikaJ on 15/6/16.
 * todolist的例子程序
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
        this.db = new LocalDb('React-Todos');
        this.state = {
            todos: this.db.get("todos") || [],
            isAllChecked: false
        };
        if (this.state.todos.every((todo)=> todo.isDone)) {
            this.state.isAllChecked = true;
        }
    }

    // 判断是否所有任务的状态都完成，同步底部的全选框
    allChecked() {
        console.log( "this.state.isAllChecked=" +  this.state.isAllChecked);
        let isAllChecked = false;
        if (this.state.todos.every((todo)=> todo.isDone)) {
            isAllChecked = true;
        }
        this.setState({isAllChecked: isAllChecked});
        console.log( "this.state.isAllChecked=" +  this.state.isAllChecked);
    }

    // 添加任务，是传递给Header组件的方法
    addTodo(todoItem) {

        this.state.todos.push(todoItem);
        this.allChecked();
        this.syncDB();
    }

    syncDB() {

        this.db.set('todos', this.state.todos);
    }

    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll = false) {

        if (isChangeAll) {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.syncDB();
    }

    // 清除已完成的任务，传递给Footer组件的方法
    clearDone() {
        let todos = this.state.todos.filter(todo => !todo.isDone);
        for (let value of todos) {
            console.log("clearDone  " + value.text);
        }
        this.state.todos = todos;//要好好考虑一下，此行代码和下一行代码的关系
        this.setState({
            todos: todos,
            isAllChecked: false
        });
        console.log("--------------------------");
        for (let value of this.state.todos ) {
            console.log("clearDone  " + value.text + "," + value.index );
        }
        this.syncDB();
    }

    // 删除当前的任务，传递给TodoItem的方法
    deleteTodo(index) {
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
        this.syncDB();
    }

    test(){

        let el = ReactDom.findDOMNode(this);
        let rect = el.getBoundingClientRect();
        console.log( rect );
        console.log(" el.offsetWidth=" +  el.offsetWidth + ",el.offsetHeight=" + el.offsetHeight);
        let style = getComputedStyle(el);
        console.log( "style=" + style)

        style =el.style;
        console.log( "style=" + style)

        let arr=[1,2,3];
        for( let i = 0; i < 100; i++ ){
            if( arr.length > 10 ){
                console.log( arr );
                arr.shift();
                console.log( arr );
                break;
            } else {
                arr.push(i);
            }


        }

        //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa");
        //el.addEventListener( '', callback, false);
    }
    render() {
        var otherProps = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.isDone)).length || 0,
            todos: this.state.todos
        };
        return (
            <div className="panel">
                <TodoHeader addTodo={this.addTodo.bind(this)}/>
                <TodoMain deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos}
                          changeTodoState={this.changeTodoState.bind(this)}/>
                <TodoFooter isAllChecked={this.state.isAllChecked} clearDone={this.clearDone.bind(this)} {...otherProps}
                            changeTodoState={this.changeTodoState.bind(this)}/>
                <button onClick={this.test.bind(this)}>test</button>
                <div className="radius-test1"></div>
                <div><img src="http://image.zhangxinxu.com/image/blog/201510/wanshenggui.jpg" width="240" height="240" alt="万圣节-扮鬼" style={{borderRadius: '50%'}}  /></div>

            </div>
        )
    }
}
ReactDom.render(<App/>, document.getElementById("app"));