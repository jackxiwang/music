import React, { Component } from 'react'
import {connect} from 'react-redux'
import Right from '../../components/right/right'
import './song.css'
class Song extends Component {
    render() {
        return (
            <div className="song">
                <Right></Right>

            </div>
        )
    }
}
const mapState = (state)=>{
    return {

    }
}
const mapAction = (state)=>{
    return {
        mapAction
    }
}


export default connect(mapState,mapAction)(Song)