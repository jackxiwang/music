export default function formateSeconds(endTime) {
    let secondTime = parseInt(endTime)
    let min = 0// 初始化分
    let result = ''
    if (secondTime > 60) {
        min = parseInt(secondTime / 60)
        secondTime = parseInt(secondTime % 60)//获取秒数，秒数取佘，得到整数秒数
        
    }
    result = `${min.toString().padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`
    return result
}