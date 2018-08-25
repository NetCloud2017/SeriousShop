import React, {Component} from 'react';

import {connect} from 'react-redux'
import './css/index.css'
import OpenView from '../../components/openview/OpenView'
import TimeC from '../../components/timeC/TimeC'
import {loadingHome } from  '../../store/actions'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
//全选替换class的时候,应选择className   否则会把 下面这个类名提换掉；
class Home extends Component {

    change=(newState)=>{
        this.setState({newState})
    }
    initIndex=()=>{
        let ul=this.refs.navList
        let lis = ul.children
        let length =lis.length

        for(var i= 0 ; i<length ; i++){
            lis[i].index=i;
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
    computedWidthAndScroll=(refEle,split,watchEle)=> {
        //获取元素怎么不行呢    原因是我初始时拿到的是openview 的这个组件而不是homeData为true时 后面的那个组件所以
        //报错也拿不到元素；
        const ul =this.refs[refEle]
        // const ll =document.getElementsByClassName(''+refEle)

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
    componentWillMount(){

    }

    newSwiper=()=>{
        new Swiper('.swiper-container', {
            loop: true,
            initialSlide :0,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                bulletClass  : 'my-bullet',
                bulletActiveClass: 'my-bullet-active',
                renderCustom: function (swiper, current, total) {
                    // _this.isShow =current
                    var customPaginationHtml = "";

                    for (var i = 0; i < total; i++) {
                        //判断哪个分页器此刻应该被激活  原来是，replaceAll 操作时
                        //把这里替换了 ，并且js里写的还是class ,jsx里写的才是className
                        if (i === (current - 1)) {
                            customPaginationHtml += '<span class="my-bullet my-bullet-active"></span>';
                        } else {
                            customPaginationHtml += '<span class="my-bullet"></span>';
                        }
                    }
                    return customPaginationHtml;
                },
            },
            autoplay: {
                autoplay:true,
                delay: 3000
            },
        })
    }
    componentDidMount(){
        console.log('componentDidMount');
        let {homeData} =this.props.state

        if(!homeData){
            return
        }
        this.computedWidthAndScroll('navList',32.5,'.home-nav')
        this.newSwiper()
    }
    componentDidUpdate(){
        //不要写两个同样的生命周期函数否则，不运行；
        let {homeData} =this.props.state
        if(!homeData){
            console.log('ssss');
            return
        }
        console.log('updata');
        this.computedWidthAndScroll('navList',32.5,'.home-nav')
        this.computedWidthAndScroll('onesCan',32.5,'.firstOnList')
        this.computedWidthAndScroll('hotList',32.5,'.hotOnList')
        this.computedWidthAndScroll('picText',20,'.profScroll')
        this.newSwiper()
        this.initIndex()

    }
    render(){
        //方法不是在state 里的 ，而是在 props 这个对象身上的；
        const {firstView, homeData, error} = this.props.state
        let {loadingHome} = this.props

        let {selectEle} = this
        if (firstView) {
            return  <OpenView  loadingHome={loadingHome}/>
        } else if (homeData) {
            //记得返回的组件都只能用一个跟标签抱起来，否则报错；
            return (
                <div className="homeCan">
                    <nav>
                        <div className='home-nav'>
                            <ul className="navList" ref="navList" >
                                {homeData.headCateList.map((item ,index)=>{
                                   return(<li onClick={selectEle} key={index}><span>{item.name}</span></li>)
                                })}
                            </ul>
                        </div>
                    </nav>
                    <div className="scroll-pic">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {homeData.focusList.map((i,index)=>{
                                    return(
                                        <div className="swiper-slide"   key={index}>
                                            <a href="#" className="link_to_good" >
                                                <div className="good_container">
                                                    <img src= {i.picUrl} alt="img"/>
                                                </div>
                                            </a>
                                        </div >
                                    )
                                })}
                            </div>
                            <div className="swiper-pagination">

                            </div>
                        </div>
                        <div className="g-grow">
                            {homeData.policyDescList.map((item,index)=>{
                                return(
                                    <div className="item"  key={index}>
                                        <img src={item.icon} alt="img" />
                                        <span>{item.desc}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <section className="directsupply">
                        <header>
                            <h3>品牌制造商直供<i className="iconfont icon-yuanjiantou1"></i></h3>
                        </header>
                        <div className="goodlist">
                            <div>
                                <div>ck制造商</div>
                                <div>25元起</div>
                                <div>上新</div>
                            </div>
                            <div>
                                <div>Nine West 制造商</div>
                                <div>209元起</div>
                                <div>上新</div>
                            </div>
                            <div>
                                <div>海外制造商</div>
                                <div>9.9元起</div>
                                <div>上新</div>
                            </div>
                            <div>
                                <div>Ralph Lauren制造商</div>
                                <div>19元起</div>
                            </div>
                        </div>
                    </section>
                    <section className="firstOn">
                        <header>
                            <h2>新品首发</h2>
                            <div className="lookForAll"><a href="#">查看全部> </a></div>
                        </header>
                        <div className="firstOnList">
                            <ul className="onesCan" ref="onesCan">
                                {homeData.newItemList.map((item,index)=>{
                                    return (
                                        <li className="oneOnList"   key={index}>
                                            <div className="onePic">
                                                <img  src={item.primaryPicUrl} alt=""/>
                                            </div>
                                            <div className="oneText">
                                                <div className="bgMark">
                                                    <span>new</span>
                                                </div>
                                                <div className="goodTitle">{item.nam}</div>
                                                <div className="commend">{item.simpleDesc}</div>
                                                <div className="price">{item.retailPrice}￥</div>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </section>
                    <section className="hotGoods">
                        <header>
                            <h2>人气推荐▪好物精选</h2>
                            <div className="lookForAll"><a href="#">查看全部> </a></div>
                        </header>
                        <div className="firstOnList hotOnList">
                            <ul className="onesCan" ref="hotList">
                                {homeData.topicList.map((item,index)=>{
                                    return (
                                        <li className="oneOnList"  key={index}>
                                            <div className="onePic">
                                                <img  src={item.itemPicUrl} alt=""/>
                                            </div>
                                            <div className="oneText">
                                                <div className="bgMark">
                                                    <span></span>
                                                </div>
                                                <div className="goodTitle">{item.title}</div>
                                                <div className="commend">{item.priceInfo}元起</div>
                                                <div className="price">{item.subtitle}</div>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </section>
                    <TimeC/>
                    <section className="welfare">
                        <div>

                        </div>
                    </section>
                    <section className="profTitle">
                        <header>
                            <h3>专题精选 <i className="iconfont icon-yuanjiantou1"></i></h3>
                        </header>
                        <div className="profScroll">
                            <div ref="picText" className="picText">
                                {homeData.topicList.map((item,index)=>{
                                    return (
                                        <div className="picOne"  key= {index}>
                                            <img src={item.itemPicUrl} alt=""/>
                                            <div>
                                                <div>
                                                    <span>{item.title}</span>
                                                    <span className="profPrice">{item.priceInfo}元起</span>
                                                </div>
                                                <span>{item.subtitle}</span>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </section>
                    <div className="allGoods">
                        {homeData.cateList.map((item,index)=>{
                            return (
                                <section className="goodThings"  key={index}>
                                    <header>
                                        <h3>{item.name}好物<i className="iconfont icon-yuanjiantou1"></i> </h3>
                                    </header>
                                    <div className="goods">
                                        <ul className="goodsCan">
                                            {item.itemList.map((itemGoodGrid,indexGoodGrid)=>{
                                                if(indexGoodGrid>=7){
                                                    return (
                                                        <li className="goodOne" key={indexGoodGrid}>
                                                            <div className="onePic">
                                                                    <span>更多{item.name}好物</span>
                                                                    <i className="iconfont icon-yuanjiantou1"></i>
                                                            </div>
                                                            <div className="oneText">

                                                            </div>
                                                        </li>
                                                    )
                                                }
                                                return (
                                                    <li className="goodOne"  key={indexGoodGrid}>
                                                        <div className="onePic">
                                                            <span className="goodColor"></span>
                                                            <img src={itemGoodGrid.listPicUrl} alt=""/>
                                                            <span className="picAlt"></span>
                                                        </div>
                                                        <div className="oneText">
                                                            <div className="bgMark">
                                                                <span></span>
                                                            </div>
                                                            <div className="goodTitle">{itemGoodGrid.simpleDesc}</div>
                                                            <div className="commend">{itemGoodGrid.name} </div>
                                                            <div className="price">{itemGoodGrid.couponPrice}￥ </div>
                                                        </div>
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                </div>

        )
        } else {
            return <h2>{error}</h2>
        }
    }
}
export default connect(
    state => ({state:state.getHomeData}),
    {
        loadingHome,
    }
)(Home)