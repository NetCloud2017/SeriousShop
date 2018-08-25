import {
    GETTEXTILE,
    GETNAVS,
    GETHOME,
    ERROR
} from './action-types'
import  {
    reqHome,
    reqTextile,
    reqKinds
} from '../api'
//不包括号他会认为是函数，而不是对象；
const homeData = data => ({type:GETHOME,data})
const textileData = data => ({type:GETTEXTILE,data})
const kindsData= data => ({type:GETNAVS,data})
const error =(data) =>({type:ERROR, data})


const loadingHome =()=>{
    return async dispatch =>{
        let  result=await reqHome()
        if(result.code===0){
            dispatch(homeData(result.home))
        }else {
            dispatch(error('沒有查找到信息'))
        }
    }
}
const loadingTextile =()=>{
    return async dispatch =>{
        let  result=await reqTextile()
        if(result.code===0){

            dispatch(textileData(result.detail))
        }
    }
}
const loadingKinds=()=>{
    return async dispatch =>{
        let  result=await reqKinds()
        if(result.code===0){
            dispatch(kindsData(result.nav.categoryL1List))
        }
    }
}
export {
    loadingHome,
    loadingKinds,
    loadingTextile
}