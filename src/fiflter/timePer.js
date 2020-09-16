export default function timePer(time){
    if(!time){
        return
    }
    let m =parseInt(time[0])
    let s = parseInt(time[1])
    return m+s
}