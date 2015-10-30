'use strict';
import React from "react";
export default class TodoFooter extends React.Component{

    // 处理全选与全不选的状态
    handlerAllState(event){
        this.props.changeTodoState(null, event.target.checked, true);
    }

    // 绑定点击事件，清除已完成
    handlerClick(){
        let todos = this.props.todos;
        let hasDone = false;
        if(todos.some((todo) => todo.isDone)){
            hasDone = true;
        }

        //for( let i = 0; i < todos.length; i++ ){
        //    let t = this.props.todos[i];
        //    console.log( t.text + ":" + t.isDone);
        //}
        //let todos = this.props.todos.filter(todo => todo.isDone);
        //console.log( "todos的长度为:" + todos.length );
        if( !hasDone ){
            alert( "不存在完成的任务");
            return;
        }
        var result = confirm('是否删除该项！');
        if(result){
            this.props.clearDone();
        }else{
            //alert('不删除！');
        }

    }

    render(){
        return (
            <div className="clearfix todo-footer">
                <input checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="fl"/>
                <span className="fl">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
                <button onClick={this.handlerClick.bind(this)} className="fr">清除已完成</button>
            </div>
        )
    }
}