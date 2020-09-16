import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import index from './moudel/index'
import hot from './moudel/hot'
import detail from './moudel/detail'
import search from './moudel/search'
import song from './moudel/song'
const reducer= combineReducers({
    index,
    hot,
    detail,
    search,
    song
})


const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})



export default store