function checkSameWeek(date1,date2){
    let date1 = new Date(date1)
    let date2 = new Date(date2)
    let diff = Math.abs(date1 - date2)
    console.log(diff/(1000*60*60*24))
}
console.log(checkSameWeek('2025-01-02','2025-01-05'))
console.log(checkSameWeek('2027-01-01','2025-11-15'))