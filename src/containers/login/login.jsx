import React, {Component} from 'react';
import {connect} from 'react-redux'
import './css/index.css'
class Login extends Component {
    // componentWillMount() {
    //     let {loadingTextile} = this.props
    //     loadingTextile()
    // }
    // componentDidUpdate(){
    //
    // }
    render(){
        return(
            <div className="profileCan">
                <profile-head/>
                <section>
                    <div className="profile-pic">
                        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                    </div>
                    <div className="buttons">
                        <div>
                            <i className="shoujiIcon"></i>
                            <span>手机号码登录</span>
                        </div>
                        <div>
                            <i className="emailIcon"></i>
                            <span>邮箱账号登录</span>
                        </div>
                        <div>
                            <span>手机号快捷注册> <i className="jiantou"></i></span>
                        </div>
                    </div>
                </section>
                <footer>
                    <span><i> &nbsp;</i>微信</span>|
                    <span><i>&nbsp; </i>QQ</span>|
                    <span><i> &nbsp;</i>微博</span>
                </footer>
            </div>
        )
    }
}
export default connect(
    state => ({}),
    {}
)(Login)