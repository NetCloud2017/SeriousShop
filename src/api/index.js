import ajax from './ajax'
//获取首页数据
const  reqHome =()=>ajax('/home')
//第二页数据
const reqTextile=() => ajax('/detail')
//第三页数据
 const reqKinds = () => ajax('/nav')





  const reqData = () => ajax('/data')
//获取banner数组
  const reqBanner = () => ajax('/banner')




// 获取图片验证码
  const reqCaptcha = () => ajax('/api/captcha')
// 账号密码登录
  const accountLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd/',{name, pwd, captcha},"POST")
// 获取短信验证码
 const mobileCode = (phone) => ajax('/api/sendcode', {phone})
// 手机号验证码登录
  const phoneLogin = ({phone, code}) => ajax('/api/login_sms/', {phone, code},"POST")


export {
  reqHome,
  reqTextile,
  reqKinds
}
