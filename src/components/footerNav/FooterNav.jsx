import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import './css/index.css'
// import {NavBar} from 'antd-mobile'
// import {Route ,Switch} from 'react-router-dom'
import {loadingHome,loadingTextile,loadingKinds} from '../../store/actions'
class FooterNav extends Component {
    static propTypes={
        navList:PropTypes.array.isRequired,
        goTo: PropTypes.func.isRequired
    }

    initIndex=()=> {
        //这里都搞这么久得复习一下获取元素的方法了
        let ul = document.querySelector('.footer_guide')
        let lis = ul.children
        let length = lis.length
        for (var i = 0; i < length; i++) {
            lis[i].index = i
        }
        lis[0].classList.add('on')
    }
    selectEle=(event)=>{

        let ele=event.currentTarget
        let lis=ele.parentNode.children
        let length = lis.length
        for (var i =0;i< length; i++){
            lis[i].classList.remove('on')
        }
        lis[ele.index].classList.add('on')
    }
    componentDidMount(){
        this.initIndex()
    }
    componentDidUpdate(){
        //底部导航有图片，字体，都是网路获取的

    }
    render (){
        let {navList,goTo} = this.props
        let {selectEle} =this
        return (
            <div>
                <footer className="footer_guide border-1px">
                        {navList.map((item,index)=>{
                            //用NavLink 这个路由标签不行，会报错
                            //Hash history cannot PUSH the same path; a new entry will not be added to the history stack
                            return (
                                    <div onClick={(ev) => {
                                        //事件回调里的函数传的参数都是事件对象event
                                        let path =item.path
                                        selectEle(ev)
                                        goTo(path)  } }  className="guide_item"  key= {index} >
                                            <span className="item_icon">
                                                <i className={`iconfont ${item.fonts}`}></i>
                                            </span>
                                        <span>{item.title}</span>
                                    </div>
                                    )
                        })}
                </footer>


            </div>
        )
    }
}

export default connect(
    state => ({}),
    {loadingHome,loadingTextile,loadingKinds}
)(FooterNav)