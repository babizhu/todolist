'use strict';
import React from "react";

class TodoHeader extends React.Component {

    // 绑定键盘回车事件，添加新任务
    handlerKeyUp(event){
        if(event.keyCode === 13){

            let value = event.target.value;


            if(!value) return false;

            let newTodoItem = {
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }
    textChange( event ){
        console.log( "开始自动搜索" + event.target.value );
    }
    test(){
        alert("这是个陷阱，其实你直接回车就能提交任务啦:-)");
    }

    render(){
        return (
            <div className="panel-header">
                <input onChange={this.textChange.bind(this)} onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
                <button onClick={this.test.bind(this)} className="fr">添加</button>
            </div>
        )
    }
}
export default TodoHeader;