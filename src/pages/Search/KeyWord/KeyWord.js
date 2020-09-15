import React from 'react'
import './KeyWord.css'
export default function KeyWord(props) {
    const {keyList,changeValue} = props
    return (
        <div className="key-list">
           {keyList.map((item,index)=>{
               return (
                <span key={index} onClick={()=>changeValue(item.first)}>{item.first} </span>
               )
           }) }
        </div>
    )
}
