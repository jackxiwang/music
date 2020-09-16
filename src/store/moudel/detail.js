import { reqDetail } from '../../utils/request'
const initState = {
   playDetail:{}
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeDetail':
            return {
                ...state,
                playDetail:action.playDetail
            }
        
        default:
            return state
    }
}
// action
export const changeDetailAction = (playDetail)=>{
    return {
        type:'changeDetail',
        playDetail
    }
}
export const reqDetailAction = (param)=>{
    return (dispatch,getState)=>{
        // if(getState().detail.playDetail.tracks){
        //     return
        // }else {
        //     dispatch(changeDetailAction({}))
        // }
        reqDetail(param).then(res=>{
            dispatch(changeDetailAction(res.data.playlist))
        })
    }
}

export const playDetail = (state)=>state.detail.playDetail
export default reducer