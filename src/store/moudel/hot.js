import { reqHotList } from '../../utils/request'
const initState = {
    hotList: []
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeHotList':
            return {
                ...state,
                hotList: action.hotList
            }
        default:
            return state
    }
}
// action
export const changeHotListAction = (hotList) => {
    return ({
        type: 'changeHotList',
        hotList
    })
}
export const reqHotListAction = () => {
    return (dispatch, getState) => {
        if (getState().hot.hotList.length > 0) {
            return
        }
        reqHotList().then(res => {
            dispatch(changeHotListAction(res.data.playlist.tracks))
        })
    }
}

export const hotList = (state) => state.hot.hotList
export default reducer