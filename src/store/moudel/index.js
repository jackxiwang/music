import {reqBanner,reqPlayList,reqNewList} from '../../utils/request'
const initState = {
    banner:[],
    playList:[],
    newSong:[]
}
function reducer(state=initState,action){
    switch(action.type){
        case 'changeBanner':
            return {
                ...state,
                banner:action.banner
            }
        case 'changePlayList':
            return {
                ...state,
                playList:action.playList
            }
        case 'changeNewSong':
            return {
                ...state,
                newSong:action.newSong
            }
        default:
            return state
    }
}
// action
// banner数据
export const changeBannerAction =(banner)=>{
    return ({
        type:'changeBanner',
        banner
    })
}
export const reqBannerAction =()=>{
    return (dispatch,getState)=>{
        if(getState().index.banner.length>0){
            return
        }
        reqBanner().then(res=>{
            dispatch(changeBannerAction(res.data.banners))
        })
    }
}
// 歌单数据
export const changePlayListAction = (playList)=>{
    return ({
        type:'changePlayList',
        playList
    })
}
export const reqPlayListAction = ()=>{
    return (dispatch,getState)=>{
        if(getState().index.playList.length>0){
            return
        }
        reqPlayList().then(res=>{
            dispatch(changePlayListAction(res.data.result))
        })
    }
}
// 最新音乐
export const changeNewSongActin = (newSong)=>{
    return ({
        type:'changeNewSong',
        newSong
    })
}
export const reqNewSongAction = ()=>{
    return (dispatch,getState)=>{
        if(getState().index.newSong.length>0){
            return
        }
        reqNewList().then(res=>{
            dispatch(changeNewSongActin(res.data.result))
        })
    }
}
export const banner = (state)=>state.index.banner
export const playList = (state)=>state.index.playList
export const newSong = (state)=>state.index.newSong
export default reducer