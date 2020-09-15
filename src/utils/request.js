import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config=>{

    return config
})
axios.interceptors.response.use(res=>{
    console.log('=========='+res.config.url+'============')
    console.log(res);
    return res
})

// 首页banner
export const reqBanner = ()=>{
    return axios({
        url:'/banner?type=1',
        method:'get'
    })
}
// 首页推荐
export const reqPlayList = ()=>{
    return axios({
        url:"/personalized?limit=6",
        method:'get'
    })
}
// 首页新歌
export const reqNewList = ()=>{
    return axios({
        url:"/personalized/newsong",
        method:'get'
    })
}
// 热歌榜
export const reqHotList = ()=>{
    return axios({
        url:'/top/list?id=19723756',
        method:'get'
    })
}
// 歌单详情
// /playlist/detail
export const reqDetail = (params)=>{
    return axios({
        url:'/playlist/detail',
        method:'get',
        params
    })
}
// /search/hot
// 搜索关键词
export const reqKeyWord = ()=>{
    return axios({
        url:"/search/hot",
        method:'get'
    })
}
// 搜索
export const reqSearchList = (params)=>{
    return axios({
        url:'/search',
        method:'get',
        params
    })
}