import { reqKeyWord, reqSearchList } from '../../utils/request'
const initState = {
    value: '',
    isKey: true,
    keyList: [],
    searchList: [],
    isShow:false  //控制下拉框
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeValue':
            return {
                ...state,
                value: action.value
            }
        case 'changeIsKey':
            return {
                ...state,
                isKey: action.bool
            }
        case 'changeKey':
            return {
                ...state,
                keyList: action.keyList
            }
        case 'changeSearch':
            return {
                ...state,
                searchList: action.searchList
            }
        case 'changeShow':
            return {
                ...state,
                isShow:action.isShow
            }
        
        default:
            return state
    }
}
// action
// 修改输入框值
export const changeValueAction = (value) => {
    return ({
        type: 'changeValue',
        value
    })
}
// 修改显示
export const changeIsKeyAction = (bool) => {
    return ({
        type: 'changeIsKey',
        bool
    })
}
// 热搜词
export const changeKeyAction = (keyList) => {
    return ({
        type: 'changeKey',
        keyList
    })
}
export const reqKeyAction = () => {
    return (dispatch, getState) => {
        reqKeyWord().then(res => {
            dispatch(changeKeyAction(res.data.result.hots))
        })
    }
}
// 搜索结果
export const changeSearchAction = (searchList) => {
    return ({
        type: 'changeSearch',
        searchList
    })
}
export const reqSearchAction = (params) => {
    return (dispatch, getState) => {

        dispatch(changeSearchAction([]))
        reqSearchList({ keywords: params }).then(res => {
            dispatch(changeSearchAction(res.data.result.songs))
        })
    }
}
// 控制下拉框
export const changeShowAction = (isShow)=>{
    return ({
        type:'changeShow',
        isShow
    })
}
export const value = (state) => state.search.value
export const keyList = (state) => state.search.keyList
export const isKey = (state) => state.search.isKey
export const searchList = (state) => state.search.searchList
export const isShow = (state)=>state.search.isShow
export default reducer