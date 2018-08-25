import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll';

import './onekindcss/index.css'
class  OneKind extends Component {
    static propTypes={
        navList:PropTypes.array.isRequired,
        index:PropTypes.number.isRequired,
    }
    initScroll(){
        this.computedWidthAndScroll('goodTable',40,'.scroll')
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
    }
    render() {
        let {navList,index=0} =this.props
        let someone=navList[index]
        return (
            <div className="scroll">
                <section className="oneKindsCan">
                    <header>
                        <img  src={someone.bannerUrl} alt=""/>
                    </header>
                    <section className="goodList">
                        <header>
                            <div></div>
                            <div>{someone.name}分类</div>
                            <div></div>
                        </header>
                        <div className="listCan">
                            <ul className="goodTable" ref="goodTable">
                                {someone.subCateList.map((itemCate,indexCate)=>{
                                    return(
                                        <li className="goodItem"  key={indexCate}>
                                            <img  src={itemCate.wapBannerUrl} alt=""/>
                                            <div className="goodTitle">
                                                {someone.name}
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(OneKind)