import React, { Component } from 'react'
import {connect} from 'react-redux'
import asyncComponent from '../../utils/asyncComponent'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import Header from './component/Header/Header'
import './index.css'
const Recom = asyncComponent(()=>import('../Recommend/Recommend'))
const Hot = asyncComponent(()=>import('../Hot/Hot'))
const Search = asyncComponent(()=>import('../Search/Search'))
class Index extends Component {
    
    render() {
        return (
            <div className="index" style={{padding:'1rem 0'}}>
                <Header></Header>
                <div className="nav" >
                    <NavLink to="/index/recom" activeClassName="select">推荐</NavLink>
                    <NavLink to="/index/hot" activeClassName="select">热歌榜</NavLink>
                    <NavLink to="/index/search" activeClassName="select">搜索</NavLink>
                </div>
                <Switch>
                    <Route path="/index/recom" component={Recom}></Route>
                    <Route path="/index/hot" component={Hot}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/recom"></Redirect>
                </Switch>
            </div>
        )
    }
}
const mapState = (state)=>{
    return {
        
    }
}
const mapAction = (dispatch)=>{
    return {
       
    }
}


export default connect(mapState,mapAction)(Index)