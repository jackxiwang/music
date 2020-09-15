import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hotList, reqHotListAction } from '../../store/moudel/hot'
import BigImg from './BigImg/BigImg'
import HotList from './HotList/HotList'
import './hot.css'
class Hot extends Component {
    componentDidMount(){
        const {reqHotList} = this.props
        reqHotList()
    }
    render() {
        const {hotList} = this.props
        return (
            <div className="hot">
                <BigImg></BigImg>
                {hotList.length>0?<HotList hotList={hotList}></HotList>:null}
               
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        hotList:hotList(state)
    }
}
const mapAction = (dispatch) => {
    return {
        reqHotList:()=>dispatch(reqHotListAction())
    }
}


export default connect(mapState, mapAction)(Hot)