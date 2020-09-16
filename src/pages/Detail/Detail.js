import React, { Component } from 'react'
import querystring from 'querystring'
import {connect} from 'react-redux'
import { playDetail,reqDetailAction } from '../../store/moudel/detail'
import Right from '../../components/right/right'
import Cover from './Cover/Cover'
import PlayDetail from './PlayDetail/playDetail'
class Detail extends Component {
    componentDidMount(){
        const {id}=querystring.parse(this.props.location.search.slice(1))
        const {reqDetail} = this.props
        reqDetail({id})
       
    }
    render() {
        const {list} = this.props
        return (
            <div>
               <Right></Right>
               {list&&list.tracks?<Cover list={list}></Cover>:null}
               {list&&list.tracks?<PlayDetail list={list}></PlayDetail>:null}
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        list:playDetail(state)
    }
}
const mapAction = (dispatch)=>{
    return {
        reqDetail:(param)=>dispatch(reqDetailAction(param))
    }
}


export default connect(mapState,mapAction)(Detail)