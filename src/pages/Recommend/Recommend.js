import React, { Component } from 'react'
import {connect} from 'react-redux'
import Banner from './component/Banner/Banner'
import Playlist from './component/Playlist/PlayList'
import NewMusic from './component/NewMusic/NewMusic'
import { reqBannerAction,banner, reqPlayListAction,playList, newSong, reqNewSongAction } from '../../store/moudel/index'
class Recommend extends Component {
    componentDidMount(){
        const {reqBanner,reqPlayList,reqNewSong} = this.props
        reqBanner()
        reqPlayList()
        reqNewSong()
    }
    render() {
        const {banner,playList,newSong}=this.props
        return (
            <div>
               {banner.length>0?<Banner banner={banner}></Banner>:null}
               {playList.length>0? <Playlist playList={playList}></Playlist>:null}
               {newSong.length>0?<NewMusic newSong={newSong}></NewMusic>:null}
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        banner:banner(state),
        playList:playList(state),
        newSong:newSong(state)
    }
}
const mapAction = (dispatch)=>{
    return {
        reqBanner:()=>dispatch(reqBannerAction()),
        reqPlayList:()=>dispatch(reqPlayListAction()),
        reqNewSong:()=>dispatch(reqNewSongAction())
    }
}


export default connect(mapState,mapAction)(Recommend)