import React, { Component } from 'react'
import { connect } from 'react-redux'
import qs from 'querystring'
import './song.css'
import Right from '../../components/right/right'
import Music from './component/Music/Music'
import {
    changePlayAction,
    lysic,
    music,
    musicDetail,
    play,
    reqDetailAction,
    reqLysicAction,
    reqMusicUrlAction
} from '../../store/moudel/song'
import time from '../../fiflter/time'
import timeper from '../../fiflter/timePer'
class Song extends Component {
    componentDidMount() {
        const { id } = qs.parse(this.props.location.search.slice(1))
        const { reqUrl, reqLysic, reqDetail } = this.props
        reqUrl(id)
        reqLysic(id)
        reqDetail(id)
    }
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    playControl() {
        const { play, changePlay } = this.props
        let bool = !play
        changePlay(bool)
        if (bool) {
            this.refs.audio.play()
        } else {
            this.refs.audio.pause()
        }
    }
    // 歌词滚动变色
    listUp() {
        console.log(document.querySelector('.scroll'));
        let scroll = document.querySelector('.scroll');
        let itemH = scroll.querySelector('div').clientHeight
        const { lysic } = this.props
        const { n } = this.state
        let musicList = lysic.lyric ? lysic.lyric.split(/\n/) : ''
        let list =  musicList.map((item) => {
            return {
                "time": item.slice(1, musicList[0].indexOf(']')).slice(0,5),
                "con": item.slice(musicList[0].indexOf(']') + 1)
            }
        }) ;
       this.setState({
           n:list.findIndex(item=>{
            return time(this.refs.audio.currentTime) == item.time
        })===-1?n:list.findIndex(item=>{
            return time(this.refs.audio.currentTime) == item.time
        })
       },()=>{
           scroll.style.top =-(n*itemH)+ "px" 
       })

    }
    start(){
        
    }
    // 离开之前
    componentWillUnmount(){
        const {changePlay} = this.props
        changePlay(false)
    }
    render() {
        const { music, play, lysic, detail } = this.props;
        const { n } = this.state
        let musicList = lysic.lyric ? lysic.lyric.split(/\n/) : ''
        let list = musicList.length > 0 ? musicList.map((item) => {
            return {
                "time": item.slice(1, musicList[0].indexOf(']')),
                "con": item.slice(musicList[0].indexOf(']') + 1)
            }
        }) : null;
        console.log(list);
        return (
            <div className="song">
                <Right></Right>
               { musicList.length > 0? <audio src={music.url} ref="audio" onTimeUpdate={() => this.listUp()}></audio>:null}
                {music && musicList.length > 0 ?
                    <Music
                        playControl={() => this.playControl()}
                        play={play}
                        list={list}
                        detail={detail}
                        n={n}

                    ></Music> : null
                }

            </div>
        )
    }
}
const mapState = (state) => {
    return {
        music: music(state),
        play: play(state),
        lysic: lysic(state),
        detail: musicDetail(state)
    }
}
const mapAction = (dispatch) => {
    return {
        reqUrl: (id) => dispatch(reqMusicUrlAction(id)),
        changePlay: (bool) => dispatch(changePlayAction(bool)),
        reqLysic: (id) => dispatch(reqLysicAction(id)),
        reqDetail: (id) => dispatch(reqDetailAction(id))
    }
}


export default connect(mapState, mapAction)(Song)