export function isEvenNum(n:number){
    if(typeof(n) !== 'number') return 'Invalid'
    if(n === 2) return true 
  let half = n/2
//   console.log(remain)
  if(Math.round(half) !== n/2){
    return false
  } 
  return true
}
// console.log(isEvenNum(0))
