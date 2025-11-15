function formatTimeAgo(timestamp:string){
    let now = new Date()
    // let hourDate1 = new Date().getHours()
    // let minDate1 = new Date().getMinutes()
    // console.log({date1,hourDate1,minDate1})

    let given = new Date(timestamp)
    let diff = Math.abs(given - now)
    let result:{day:number,hours:number,minutes:number,seconds:number} =[]
    
    let day:number = Math.floor((diff / (1000*60*60*24)))
    let hours:number = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes:number = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds:number = Math.floor((diff % (1000 * 60)) / (1000))
    result.push({day,hours,minutes,seconds})
    return result
}
console.log(formatTimeAgo('2025-11-16'))
let a = [ { day: 0, hours: 12, minutes: 49, seconds: 42 } ]