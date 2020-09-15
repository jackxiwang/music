import React, { Component } from 'react'
import {Icon} from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './right.css'

// export default function Right() {
//     return (
//         <div className="right" >
//             <Icon type={item} size={'lg'} color={'#fff'}></Icon>
//         </div>
//     )
// }


class Right extends Component {
    go(){
        this.props.history.go(-1)
    }
    render() {
        const item = 'left'
        return (
            <div className="right" >
            <Icon type={item} size={'lg'} color={'#fff'} onClick={()=>{this.go()}}></Icon>
        </div>
        )
    }
}


export default withRouter(Right)