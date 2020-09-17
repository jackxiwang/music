import React from 'react'
import role from '../../../../assets/img/disc-ip6.png'
import needle from '../../../../assets/img/needle-ip6.png'
import './Music.css'
export default function Music(props) {
    const { playControl, play,list,detail,n,start,move,end } = props
    return (
        <div className="music-play">
            <img src={needle} alt="" className={play?'needle-select':'needle'} />
            <div className="music-control" onClick={() => playControl()}>
                <img src={role} alt="" className='role' />
                <div className={play?'play-icon':'stop-icon'}>

                </div>
               {detail.al? <img src={detail.al.picUrl} alt="" className={play?'play-img-rotate':'play-img'} />:null}
            </div>
            <div className="lysic" onTouchStart={(e)=>start(e)} onTouchMove={(e)=>move(e)} onTouchEnd={(e)=>end(e)}>
                <div className={n>0?"hide":'lysic-title'}>
                    <div>{detail&&detail.name?detail.name:null} </div>
                    <div className="ly-singer">
                    {
                        detail&&detail.ar?detail.ar.map((item,index)=>{
                            return (
                            <p key={item.id} >
                                <span>{item.name}</span>
                                {detail.ar.length > 1 && index !== detail.ar.length - 1 ? <span>/</span> : null}
                            </p>
                            )
                        }):null
                    }
                    </div>
                </div>
                {/* 歌词 style={{top:-(n*1.5)+ "rem"}}*/}
                <div className="scroll" >
                {list.map((item,index)=>{
                    return (<div key={index} className={n===index?'change':''}>{item.con} </div>)
                })}
                </div>
            </div>

        </div>
    )
}
