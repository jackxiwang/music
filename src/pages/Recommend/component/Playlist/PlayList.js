import React from 'react'
import './playlist.css'
import {Link} from 'react-router-dom'
export default function PlayList(props) {
    const { playList } = props
    return (
        <div className="playlist">
            <div className="play-title">
                <div className="line"></div>
                <p>推荐歌单</p>
            </div>
            <div className="play-con">
                {playList.map(item => {
                    return (
                        <Link className="play-item" key={item.id} to={"/detail?id="+item.id}>
                            <img src={item.picUrl} alt="" />
                            <p>{item.name}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
