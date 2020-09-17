export default function timePer(time){
    let t = time.split(':')
    let m =Math.floor(t[0])*60
    let s = Math.floor(t[1])
    return m+s
}