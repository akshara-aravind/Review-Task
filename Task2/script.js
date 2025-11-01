function pairs(n){
 let result = []
 let out;
 for(let i=0; i< n.length;i++){
    out = '()'
    result.push(out)
 }
 return result
}
console.log(pairs(1))