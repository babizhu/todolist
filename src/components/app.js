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
import React from 'react';

import ReactDom from "react-dom"


class App extends React.Component {

    componentDidMount() {
        //fetch("http://api.money.126.net/data/feed/1000002,money.api",{ mode: "no-cors" }).then( (response) => console.log(response.text()));
        //fetch("http://api.money.126.net/data/feed/1000002",{ mode: "no-cors" })
        //    .then((response) => response.json())
        //    .then(function(data) {
        //        console.log(data);
        //    });

        fetch("http://api.money.126.net/data/feed/1000002",{ mode: "no-cors" })
            .then((response) => console.log(response.json));
    }

    render() {
        return (
            <div>aaa发射点发射点b发射点bbb333bbb！！！！</div>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("app"));