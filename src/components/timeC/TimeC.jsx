import React, {Component} from 'react';
import {connect} from 'react-redux'
import './css.css'
class  TimeC extends Component {
    state={
        time:{
            hour:'00',
            min:'00',
            sec:'00',
        }

    }
    countDown=()=>{
        // 以计算定时器就有问题
        let d=new Date();
        d.setHours(18)
        d.setMinutes(0)
        d.setSeconds(0)
        let d2;
        let hour;
        let min;
        let sec;
        let timer= setInterval(()=> {
            d2=new Date();
            hour=parseInt((d.getTime()-d2.getTime())/1000/3600)
            min=parseInt(((d.getTime()-d2.getTime())/1000/60)-hour*60)
            sec=parseInt(((d.getTime()-d2.getTime())/1000)-hour*3600-min*60)
            if(hour<10){
                hour='0'+hour
            }
            if(min<10){
                min ='0'+min
            }
            if(sec<10){
                sec='0'+sec
            }
            hour= hour + ''
            min =min + ''
            sec = sec + ''
            let time ={
                hour ,
                min ,
                sec
            }

            this.setState({time})
        },1000)
        this.timeId=timer
    }
    componentDidMount(){
        this.countDown()
    }
    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    render() {
        let {time} = this.state
        return (
            <div>
                <section className="timeShop">
                    <div className="dowmTime">
                        <h3>严选限时购</h3>
                        <div className="timeTo">
                            <span>{time.hour}</span>
                            <span><span>:</span></span>
                            <span>{time.min}</span>
                            <span><span>:</span></span>
                            <span>{time.sec}</span>
                        </div>
                        <div>下一场18:00开始</div>
                    </div>
                    <div className="timePro">
                        <div>
                            <span>￥888</span>
                            <span>￥888</span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(TimeC)