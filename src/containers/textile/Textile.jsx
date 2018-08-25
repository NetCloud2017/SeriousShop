import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadingTextile} from "../../store/actions";
import './css/index.css'
import BScroll from "better-scroll";
import Swiper from 'swiper'

class Textile extends Component {
    initScroll(){
        this.computedWidthAndScroll('clothList',50,'.clothings')
        this.computedWidthAndScroll('topic',30,'.topicCan')

    }
    newSwiper=()=>{
        new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 12,
            //加这些配置后再加上 img的   width: 100%;position: relative;
            //才可以两翼留白 和 带左右两边的图片的边
            slidesPerView: 1.13,
            centeredSlides: true,
            onInit: function (swiper) {
                swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
                autoplay:true,
                delay: 3000
            },
        })
    }
    computedWidthAndScroll=(refEle,split,watchEle)=> {
        const ul =this.refs[refEle]

        const childs = ul.children
        let w = 0
        for (let i = 0; i < childs.length; i++) {
            w += childs[i].clientWidth
        }
        const spli = split * (childs.length - 1)
        ul.style.width = w + spli + 'px'
        new BScroll(watchEle, {
            click: true,
            scrollX: true
        })
    }
    componentWillMount() {
        let {loadingTextile} = this.props
        loadingTextile()
    }
    componentDidUpdate(){
        this.newSwiper()
        this.initScroll()

    }
    render(){
        let textile =this.props.state

        if(!textile.banner){
            //任何对象的布尔值都是true ，
            return  null
        }
        return(
            <div className="textileCan">
                <section className="h-area">
                    <div className="swiper">
                        <div className="swiper-container" >
                            <div className="swiper-wrapper">
                                {textile.banner.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <img src={item.picUrl} alt=""/>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <div className="clothings">
                        <ul className="clothList" ref="clothList">
                            {/*{textile.column.map((item,index)=>{*/}
                                {/*return (*/}
                                    {/**/}
                                {/*)*/}
                            {/*})}*/}
                            {textile.column.map((item,index)=>{
                                return (
                                    <li className="listCan"  key={index}>
                                        <img src={item.picUrl} alt="" />
                                        <span>{item.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
                <section className="commend" >
                    <header>
                        <h3>为你推荐</h3>
                    </header>
                    <article className="article">
                        <div className='comPic'>
                            <img  src={textile.recommendTwo.picUrl} alt=""/>
                            <div>
                                <div className="picTitle">
                                      <span>
                                        {textile.recommendThree.nickname}
                                      </span>
                                    <span>
                                    {textile.recommendThree.title}
                                    </span>
                                </div>
                                <span>{textile.recommendThree.subTitle}</span>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div  className="author">
                                    <img src={textile.recommendTwo.avatar} alt=''/>
                                    <span>{textile.recommendTwo.title}</span>
                                </div>
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                                <span>
                                    { textile.recommendThree.subTitle}
                                </span>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div  className="author">
                                    <img src={textile.recommendTwo.avatar} alt=''/>
                                    <span> {textile.recommendTwo.title} </span>
                                </div>
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                                <span>
                                 { textile.recommendThree.subTitle}
                                </span>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                    </article>
                    <article className="article">
                        <div className='comPic'>
                            <img  src={textile.recommendTwo.picUrl} alt=""/>
                            <div>
                                <div className="picTitle">
                                    <span>
                                        {textile.recommendThree.nickname}
                                    </span>
                                    <span>
                                         {textile.recommendThree.title}
                                    </span>
                                </div>
                                <span>{textile.recommendThree.subTitle} </span>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div  className="author">
                                    <img src={textile.recommendTwo.avatar} alt="img" />
                                    <span>{textile.recommendTwo.title}</span>
                                </div>
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                                <span>
                                {textile.recommendThree.subTitle}
                            </span>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div  className="author">
                                    <img src={textile.recommendTwo.avatar} alt=""/>
                                    <span> {textile.recommendTwo.title} </span>
                                </div>
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                                <span>
                             { textile.recommendThree.subTitle}
                            </span>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="tenC">
                    <header>
                        <h3>十点一刻</h3>
                    </header>
                    <div className="topicCan">
                        <div className="topicAll" ref="topic">
                            <div className="topic">
                                <h3 className="title">-- 今天话题 --</h3>
                                <div>你有那些租房经历</div>
                                <div>聊聊你用过的租房神器</div>
                                <div>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <span>人参与话题</span>
                                </div>
                            </div>
                            <div className="more">
                                <div >查看全部话题 <i className="iconfont icon-yuanjiantou1"></i></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="select" >
                    <header>
                        <h3>为你推荐</h3>
                    </header>
                    <article className="article">
                        <div className='comPic'>
                            <img  src={textile.recommendTwo.picUrl} alt=""/>
                            <div>
                                <span>{textile.recommendThree.subTitle} </span>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                        <div className="comTwo">
                            <div className="text">
                                <div className="title">
                                    {textile.recommendTwo.title}
                                </div>
                            </div>
                            <div className="pic">
                                <img src={textile.recommendTwo.picUrl} alt=""/>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="moreTextile">
                    <header>
                        <div></div>
                        <div>更多精彩</div>
                        <div></div>
                    </header>
                    <div className="textileCan">
                        <ul>
                            { textile.findMore.map((item,index) =>{
                                return (
                                    <li className="textileItem"  key={index}>
                                        <img src={item.itemPicUrl} alt=""/>
                                        <div className="brief">{item.subTitle}</div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}

export default connect(
    state => ({state:state.textileData}),
    {loadingTextile}
)(Textile)