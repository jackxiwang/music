import React from 'react'
import './playDetail.css'
import zero from '../../../fiflter/zero'
import { Link } from 'react-router-dom'
export default function HotList(props) {
    const { list } = props
    return (
        <div className="detail-con">
            {list.tracks.map((item, index) => {
                return (
                    <Link key={item.id} className="detail-con-list" to={"/song?id="+item.id}>
                        <div className="detail-index">
                            <i>{zero(index + 1)} </i>

                            <div className="detail-title">
                                <p className="big-title">{item.name}</p>
                                <div className="new-singer">
                                    <div className="singer-list">
                                        <span className="detail-icon"></span>
                                        {
                                            item.ar.map((value, index) => {
                                                return (<p key={value.id}>
                                                    <span>{value.name}</span>
                                                    {item.ar.length > 1 && index !== item.ar.length - 1 ? <span>/</span> : null}
                                                </p>
                                                )
                                            })
                                        }
                                        <span>——</span>
                                        <p>{item.name}</p>
                                    </div>


                                </div>
                            </div>
                            </div>
                            <div className="new-sprite">

                            </div>
                        
                    </Link>
                )
            })}
        </div>
    )
}
