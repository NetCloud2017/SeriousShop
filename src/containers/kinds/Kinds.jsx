import React, {Component} from 'react';
import  BScroll from 'better-scroll';

import {connect} from 'react-redux'
import {loadingKinds} from '../../store/actions'
import Onekind from '../../components/oneKind/OneKind'
import './css/index.css'
class Kinds extends Component {
    state={
        selectIndex: 0
    }
    initIndex=()=>{
        let ul=this.refs.leftList
        let lis = ul.children
        let length =lis.length
        for(var i= 0 ; i<length ; i++){
            lis[i].index=i;
        }
        //由于下面选择了改变状态，所以这里会重新执行导致两个元素的className 为 on
        // lis[0].classList.add('on') 所以不可以写死 初始的 selectIndex
        let {selectIndex} =this.state
        lis[selectIndex].classList.add('on')

    }
    selectEle=(event)=>{

        let ele=event.currentTarget
        let lis=ele.parentNode.children
        let length = lis.length
        for (var i =0;i< length; i++){
            lis[i].classList.remove('on')
        }
        lis[ele.index].classList.add('on')
        let selectIndex = ele.index
        this.setState({selectIndex})
    }
    componentWillMount() {
        let {loadingKinds} = this.props
        loadingKinds()
    }
    initScroll(){
        this.computedWidthAndScroll('leftList',25,'.leftList')
    }
    computedWidthAndScroll(refEle,split,watchEle){
        const ul=this.refs[refEle]
        const childs=ul.children
        let w =0
        for(let i= 0 ;i< childs.length;i++){
            w+=childs[i].clientHeight
        }
        const spli=  split *(childs.length-1)
        ul.style.height= w + spli + 'px'
        new BScroll( watchEle,{
            click:true,
        })
    }
    componentDidUpdate(){
        this.initScroll()
        this.initIndex()
    }

    render(){
        let navList =this.props.state
        let {selectIndex}= this.state
        let {selectEle}=this
        if(!navList.slice){
            return null
        }
        return(
            <div className="kindsWrap">
                <section className="kindsCan">
                    <div className="leftList">
                        <ul className="navList" ref="leftList">
                            {navList.map((item,index)=>{
                                return (
                                    // onClick={selectIndex(index)} 为什么这样写会直接触发，Maximum update depth exceeded
                                    //报超过更新深度；
                                    <li onClick={selectEle} className="oneNav"  key={index}>
                                        <span >{item.name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="rightList" >
                        < Onekind navList={navList} index={selectIndex}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(
    state => ({state:state.kindsData}),
    {loadingKinds}
)(Kinds)