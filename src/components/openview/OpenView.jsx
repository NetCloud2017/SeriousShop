import  React ,{Component} from 'react';
import PropTypes from 'prop-types'
import './css/index.css'
class OpenView extends Component{
    static propTypes ={
        loadingHome: PropTypes.func.isRequired
    }
    render(){
        let {loadingHome}=this.props
        return (
            <div className="g-bd">
                <div className="g-row">
                    {/*img标签必须有一个alt属性否则报错*/}
                    <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="img"/>
                    <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="img" />
                </div>
                <div className="g-row">
                    {/* 注意单标签都要有结束符 */}
                    <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="img" />
                    <div className="download-app"></div>
                </div>
                <div onClick={loadingHome} className="linkTo">继续使用触屏版浏览 ></div>
            </div>
        )
    }
}

export default OpenView