import React from 'react'
import './NewMusic.css'
import {Link} from 'react-router-dom'
export default function NewMusic(props) {
    const { newSong } = props
    return (
        <div className="newSong">
            <div className="new-titile">
                <div className="line"></div>
                <p>最新音乐</p>
            </div>
            <div className="new-con">
                {newSong.map(item => {
                    return (
                        <Link key={item.id} className="new-con-list" to="/song">
                            <div className="new-con-title">
                                <p className="big-title">{item.name}</p>
                                <div className="new-singer">
                                    <div className="singer-list">
                                        <span className="hot-icon"></span>
                                    {
                                       item.song.artists.map((value,index)=>{
                                            return (<p key={value.id}>
                                                <span>{value.name}</span>
                                                {item.song.artists.length>1&&index!==item.song.artists.length-1?<span>/</span>:null}
                                            </p>
                                                )
                                        })
                                    } 
                                    <span>——</span>
                                    <p>{item.name}</p>
                                    </div>
                               
                                    
                                </div>
                            </div>
                            <div className="new-sprite">

                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
