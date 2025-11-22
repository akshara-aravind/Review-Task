//
function nthPrimeNum(n){
  for(let i=2; i< Math.sqrt(n); i++){
    if(i % 2=== 0){
        return false
    }
  }
  return true
}
console.log(nthPrimeNum(7))