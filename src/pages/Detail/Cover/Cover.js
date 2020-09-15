import React from 'react'
import './cover.css'
export default function Cover(props) {
    const {list} = props
    return (
        <div className="cover">
            <div className="cover-bgc">
                <img src={list.coverImgUrl} alt=""/>
            </div>
            <div className="cover-con">
                <img src={list.coverImgUrl} alt=""/>
                <p>{list.name} </p>
            </div>
        </div>
    )
}
