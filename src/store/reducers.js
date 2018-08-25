import {combineReducers} from 'redux'
import {
    GETHOME ,
    GETNAVS,
    GETTEXTILE,
    ERROR,
} from './action-types'

const homeState = {
    firstView: true ,
    homeData: null ,
    error: false
}
function getHomeData(initState=homeState,action) {
    switch (action.type){
        case GETHOME:
            return {
                firstView: false ,
                homeData: action.data,
                error: false
            }
        case ERROR:
            return {
                firstView: false ,
                homeData: false,
                error:action.data
            }
        default:
            return initState
    }
}

function textileData(initTextile={} ,action) {
    switch (action.type){
        case GETTEXTILE:
            return action.data
        default:
            return initTextile
    }
}
function kindsData(initKinds={},action) {
    switch (action.type){
        case GETNAVS:
            return action.data
        default:
            return initKinds
    }
}
export default combineReducers({
    getHomeData,
    textileData,
    kindsData
})