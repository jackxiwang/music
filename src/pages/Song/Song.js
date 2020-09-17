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
    // 歌词处理
    lysic(lysic){
        let musicList = lysic.lyric ? lysic.lyric.split(/\n/) : ''
        let list =  musicList.map((item) => {
            return {
                "time": item.slice(1, musicList[0].indexOf(']')).slice(0,5),
                "con": item.slice(musicList[0].indexOf(']') + 1)
            }
        }).filter(item => item.lyc !== '\n') ;
        return list
    }
    // 歌词滚动变色
    listUp() {
        let scroll = document.querySelector('.scroll');
        let itemH = scroll.querySelector('div').clientHeight
        const { lysic } = this.props
        const { n } = this.state
        // let musicList = lysic.lyric ? lysic.lyric.split(/\n/) : ''
        // let list =  musicList.map((item) => {
        //     return {
        //         "time": item.slice(1, musicList[0].indexOf(']')).slice(0,5),
        //         "con": item.slice(musicList[0].indexOf(']') + 1)
        //     }
        // }) ;
       let list= this.lysic(lysic)
       this.setState({
           n:list.findIndex(item=>{
            return time(this.refs.audio.currentTime) == item.time
        })===-1?n:list.findIndex(item=>{
            return time(this.refs.audio.currentTime) == item.time
        })
       },()=>{
           if(n-2>=0){
            scroll.style.top =-((n-2)*itemH)+"px"
           }
           
       })

    }
    start(e){
        e.persist()
         this.startY = e.touches[0].clientY
         this.endY = 0
    }
    move(e){
        this.endY = e.touches[0].clientY
    }
    end(e){
        this.audio = document.querySelector('audio')
        let { n } = this.state
        let { lysic } = this.props
        if(this.endY===0){
            return
        }
        let scroll = document.querySelector('.scroll');
        let itemH = scroll.querySelector('div').clientHeight
        let list = this.lysic(lysic)
        if(this.endY<this.startY){
            n+=3
            if(n>=list.length-1){
                n=list.length-1
            }
        }
        if(this.endY>this.startY){
            n-=3
            if(n<=0){
                n=0
            }
        }
        this.setState({
            ...this.state,
            n
        })
        scroll.style.top =-((n-1)*itemH)+"px"
        this.audio.currentTime = timeper(list[n].time)
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
                        start={(e)=>this.start(e)}
                        move={(e)=>this.move(e)}
                        end={(e)=>this.end(e)}
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