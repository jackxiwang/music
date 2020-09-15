import React from 'react'

export default function SearchIn(props) {
    const {changeValue,value,search,keySearch,searchList,isShow} = props
    return (
        <div className="search-in">
            <input type="text" placeholder="请输入关键词" value={value} onChange={(e) =>changeValue(e.target.value)} />
            <i onClick={()=>search()}></i>
            <div className="sub-border">
                {isShow&&value!==''?<div className="default" onClick={()=>keySearch(value)}>
                    "搜索"：{value}
                </div>:null}
                {isShow&&value!==''&&searchList?searchList.slice(0,6).map((item,i)=>{
                    return (
                        <div key={i} onClick={()=>keySearch(item.name)} className="sub-list">{item.name} </div>
                    )
                }):null}
            </div>
        </div>
    )
}
