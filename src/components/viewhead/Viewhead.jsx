import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './css/index.css'
class  ViewHead extends Component {
    static propTypes ={
        path:PropTypes.string.isRequired
    }
    render() {
        //为什么这里的代码执行两次
        let {path} =this.props
        return (
            <div>
                { path==='/profile' || path==='/textile' || path==='/' ? <header className="profileHead"   >
                    <i className="homeIcon">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                    </i>
                    <i className="textIcon">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                    </i>
                    <i className=" searchIcon ">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                    </i>
                    <i className="shopcartIcon">
                    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                    </i>
                </header>:null}
                { path==='/home' ? <header  className="homeHeader">
                    <i>
                        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                    </i>
                    <div>
                        <i>
                            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                        </i>
                        <span> 搜索商品</span>
                    </div>
                </header>:null}
                { path==='/kinds' ?<header  className="kindsHeader">
                    <div>
                        <i>
                            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt=""/>
                        </i>
                        <span>搜索商品</span>
                    </div>
                </header>:null}
                { path==='/shopcart' ?<header  className="shopcartHead">
                    <h3>购物车</h3>
                    <span className="ticket">领劵</span>
                </header>:null}
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(ViewHead)