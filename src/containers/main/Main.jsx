import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Switch,Route, } from 'react-router-dom'
//路径一定要写准，连末尾多一个空格都不可以
import Home from '../home/Home'
import Kinds from '../kinds/Kinds'
import Login from '../login/login'
import Textile from '../textile/Textile'
import Shopcart from '../shopcart/Shopcart'
import FooterNav from '../../components/footerNav/FooterNav'
import ViewHead from '../../components/viewhead/Viewhead'
import "../../assets/common/stylus/mixins.css"
class  Main extends Component {
    navList =[
            {
                title: '首页',
                path: '/home',
                fonts:'icon-shouye',

            },
            {
                title: '识物',
                path: '/textile' ,
                fonts:'icon-fangkuaidagou-weixuanzhong',

            },
            {
                title: '分类',
                path: '/kinds' ,
                fonts:'icon-chouti',

            },
            {
                title: '购物车',
                path: '/shopcart',
                fonts:'icon-gouwuche',

            },
            {
                title: '个人',
                path: '/profile',
                fonts:'icon-renwu',
            }
        ]
    goTo =(path) => {
        this.props.history.replace(path)
    }
    render (){
        const {firstView} =this.props.state
        let path =this.props.location.pathname
        let {goTo} =this
        return (
            <div className="mainCan">
                {  firstView ?null:<ViewHead path={path}/>}
                <Switch>
                    {/*是component 而不components*/}
                    <Route path="/textile" component={Textile}/>
                    <Route path="/kinds" component={Kinds}/>
                    <Route path="/shopcart" component={Shopcart}/>
                    <Route path="/profile" component={Login}/>
                    {/*不加路由路径path就是不管那个路径都可以匹配，而查找路径是从上往下找，若放在第一个，则直接就与它匹配，所以不可以放在最前面*/}
                    <Route component={Home}/>
                    {/*<Redirect to='/home'/>*/}
                </Switch>
                {   firstView ? null : <FooterNav goTo={goTo} navList={this.navList}/>}
            </div>
        )
    }
}
export default connect(
    state => ({state:state.getHomeData}),
    {}
)(Main)