import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import zero from '../../../fiflter/zero'
import './ResultList.css'
function ResultList(props) {
    const { searchList } = props
    return (
        <div className="result-con">
            {searchList.map((item,index) => {
                return (
                    <Link key={item.id} className="result-con-list" to={"/song?id="+item.id}>
                        <div className="result-index">
                            <span>{zero(index + 1)} </span>
                            <div className="result-con-title">
                                <p className="big-title">{item.name}</p>
                                <div className="new-singer">
                                    <div className="singer-list">
                                        <span className="result-icon"></span>
                                        {
                                            item.artists.map((value, index) => {
                                                return (<p key={value.id}>
                                                    <span>{value.name}</span>
                                                    {item.artists.length > 1 && index !== item.artists.length - 1 ? <span>/</span> : null}
                                                </p>
                                                )
                                            })
                                        }
                                        <span>——</span>
                                        <p>{item.album.name}</p>
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
export default withRouter(ResultList)