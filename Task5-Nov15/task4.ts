function frequencySort(arr:number[]){
  let freq = {}
  for(let item of arr){
     freq[item] = (freq [item] || 0) + 1
  }
let key = Object.keys(freq)
// console.log(key)
let value = Object.values(freq)
// console.log(value)
let moreFreq =[]
let result = []
for(let i=0; i<value.length;i++){
       moreFreq.push(key[i].repeat(value[i]).split('').join(','))
}
for(let i=0; i< moreFreq.length-1;i++){
    //  console.log(moreFreq[i],moreFreq[i+1])
     for(let j=i+1; j<moreFreq.length; j++){
        // console.log(moreFreq[i],moreFreq[j])
        if(moreFreq[i].length < moreFreq[j].length){
             result.push(moreFreq[j])
        }
        if(moreFreq[i].length === moreFreq[j].length){
            result.push(moreFreq[i],moreFreq[j])
        }
    }

}
let set =  new Set(result)
return Array.from(set)
}
console.log(frequencySort([4,5,6,5,4,3]))
console.log(frequencySort([4,5,6,5,4,4,3]))
