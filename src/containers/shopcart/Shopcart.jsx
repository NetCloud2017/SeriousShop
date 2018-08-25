import React, {Component} from 'react';
import {connect} from 'react-redux'
import './css/index.css'
class Shopcart extends Component {
    render() {
        return (
            <div className="shopcart">
                <div className="content">
                    <div className="discount">
                        <div>30天无忧退货</div>
                        <div>48小时快递退款</div>
                        <div>满88元免邮费</div>
                    </div>
                    <div className="backImg">
                        <div className="bg-icon"></div>
                        <span>去添加点什么吧</span>
                        {/*这个问题想了很久都没有想都，{} 里写的都是js代码并且是立即执行的， 我 没有将有执行的代码写在函数里
                            所以就一加载里面的代码就执行，导致报错 ，而这里是路由跳转，直接执行这个了 this.props.history.replace("/ login")
                            所以路由都是login ，而不是在main组件定义的shopcart路径
                        */}
                        <div onClick={()=>this.props.history.replace("/shopcart")} className="login">登录</div>
                    </div>
                </div>
            </div>
        )
    }
}
//做shopcart 和 login 这两页时 遇到路由是正确访问的，所配的组件也是正确的，为什么，显示不了正确的页面 原因是 route没有写path时的先后问题；
export default connect(
    state => ({}),
    {}
)(Shopcart)