//
export function groupAnagram(arr:string[]){
    if(!Array.isArray(arr)) return 'Invalid'
    let result:string[][] = []
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i]) !== 'string') return 'Invalid'
    }
     arr.forEach(item => {
        if(typeof(item) !== 'string') return 'Invalid'
        // console.log(typeof(item))
      let sorted = item.split('').sort().join('')
    //   console.log(sorted)
      let team = result.find(el => el[0].split('').sort().join('') === sorted)
    if(team){
        team.push(item)
    }else{
        result.push([item])
    }
     })
   return result
}
// console.log(groupAnagram(['eat','tea','tan','ate','nat','bat']))

