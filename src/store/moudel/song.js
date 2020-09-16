import { reqLyric, reqMusicDetail, reqMusicUrl } from '../../utils/request'
const initState = {
   music:{},
   play:false,
   lysic:{},
   musicDetail:{}
}
function reducer(state = initState, action) {
    switch (action.type) {
        case 'changeMusic':
            return {
                ...state,
                music:action.music
            }
        case 'changePlay':
            return {
                ...state,
                play:action.play
            }
        case 'changeLysic':
            return {
                ...state,
                lysic:action.lysic
            }
        case 'changeDetail':
            return {
                ...state,
                musicDetail:action.detail
            }
        default:
            return state
    }
}
// action
// 详情
export const changeDetailAction = (detail)=>{
    return ({
        type:'changeDetail',
        detail
    })
}
export const reqDetailAction = (ids)=>{
   
    return (dispatch,getState)=>{
        dispatch(changeDetailAction({}))
        reqMusicDetail({ids}).then(res=>{
            dispatch(changeDetailAction(res.data.songs[0]))
        })
    }
}
// url
export const changeMusicAction=(music)=>{
    return ({
        type:'changeMusic',
        music
    })
}
export const reqMusicUrlAction = (id)=>{
    return (dispatch,getSate)=>{
        reqMusicUrl({id}).then(res=>{
            dispatch(changeMusicAction(res.data.data[0]))
        })
    }
}
// play
export const changePlayAction = (play)=>{
    return ({
        type:'changePlay',
        play
    })
}
// lysic
export const changeLysicAction = (lysic)=>{
    return ({
        type:'changeLysic',
        lysic
    })
}
export const reqLysicAction = (id)=>{
    return (dispatch,getSate)=>{
        dispatch(changeLysicAction({}))
        reqLyric({id}).then(res=>{
            dispatch(changeLysicAction(res.data.lrc))
        })
    }
}
export const music = (state)=>state.song.music
export const play = (state)=>state.song.play
export const lysic = (state)=>state.song.lysic
export const musicDetail = (state)=>state.song.musicDetail
export default reducer