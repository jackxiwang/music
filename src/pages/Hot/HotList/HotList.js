import React from 'react'
import './hotlist.css'
import zero from '../../../fiflter/zero'
import { Link } from 'react-router-dom'
export default function HotList(props) {
    const { hotList } = props
    console.log(hotList);
    return (
        <div className="hot-con">
            {hotList.map((item, index) => {
                return (
                    <Link key={item.id} className="hot-con-list" to="/detail">
                        <div className="hot-index">
                            <span>{zero(index + 1)} </span>

                            <div className="hot-title">
                                <p className="big-title">{item.name}</p>
                                <div className="new-singer">
                                    <div className="singer-list">
                                        <span className="hot-icon"></span>
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
