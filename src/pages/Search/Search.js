import React, { Component } from 'react'
import { connect } from 'react-redux'
import './search.css'
import { value, keyList, reqKeyAction, changeValueAction, isKey, changeIsKeyAction, searchList, reqSearchAction, isShow ,changeShowAction} from '../../store/moudel/search'
import SearchIn from './SearchIn/SearchIn'
import Key from './KeyWord/KeyWord'
import ResultList from './ResultList/ResultList'
class Search extends Component {
    componentDidMount() {
        const { reqKey } = this.props
        reqKey()
    }
    // 输入框值改变
    changeValue(val) {
       
        const {reditValue,changeIsKey,changeSearch,changeShow} = this.props
        reditValue(val)
        changeShow(true)
        if(val){
            changeSearch(val)
        }
        
        if(!val){
            changeIsKey(true)
        }
    }
    // s搜索请求
    search(){
        const {changeSearch,value,changeIsKey} = this.props
        if(value===''){
            return
        }
        changeSearch(value)
        changeIsKey(false)
    }
    keySearch(e){
        const {changeSearch,changeIsKey,reditValue,changeShow} = this.props
        reditValue(e)
        changeSearch(e)
        changeIsKey(false)
        changeShow(false)
    }
    showFalse(e){
        const {changeShow} = this.props
        if(e.target.className !== 'sub-border'){
            changeShow(false)
        }
    }
    render() {
        const {keyList,isKey,value,searchList,isShow} = this.props
        return (
            <div className="search" onClick={(e)=>this.showFalse(e)}>
                <SearchIn 
                changeValue={(value)=>this.changeValue(value)} 
                value={value}
                isShow={isShow}
                searchList={searchList}
                search={()=>this.search()}
                keySearch={(e)=>this.keySearch(e)}
                ></SearchIn>
                {
                keyList.length>0&&isKey?
                <Key 
                keyList={keyList} 
                changeValue={(val)=>this.changeValue(val)}
               
                >

                </Key>
                :null
                }
                {!isKey?<ResultList searchList={searchList}></ResultList>:null}
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        value: value(state),
        keyList: keyList(state),
        isKey:isKey(state),
        searchList:searchList(state),
        isShow:isShow(state)
    }
}
const mapAction = (dispatch) => {
    return {
        reditValue: (value) => dispatch(changeValueAction(value)),
        reqKey: () => dispatch(reqKeyAction()),
        changeIsKey:(bool)=>dispatch(changeIsKeyAction(bool)),
        changeSearch:(params)=>dispatch(reqSearchAction(params)),
        changeShow:(bool)=>dispatch(changeShowAction(bool))
    }
}


export default connect(mapState, mapAction)(Search)