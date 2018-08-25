import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route ,HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Main from './containers/main/Main'
import './mock/mockServer'


import store from './store/store'
ReactDOM.render(
    <Provider store={store} >
        {/*在react中被路由器管理的组件才是路由组件，才具有操作路由的一些方法
            switch 里的组件有history 对象
        */}
        <HashRouter>
            <Switch>
                <Route path="/" component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('app'));

