// function findLongestChain(arr:number[],item){
//     let orderdPair = []
//     function chain(start:number, currect:number[]){
//         if(currect.length === item){
//         orderdPair.push([...currect])
//         return
//         }
//       for(let i=start; i<arr.length;i++){
//         currect.push(arr[i])
//         chain(i+1,currect)
//         currect.pop()
//       }
//     }
//     chain(0,[])
//     return orderdPair
// }
function findLongestChain(arr:number[]){
    let list =[]
    let length = []
    for(let i=0; i<arr.length-1;i++){
        // console.log(arr[i])
    // console.log(arr[i+1]>arr[i] && arr[i]<arr[i+1], arr[i],arr[i+1])
            if(arr[i+1]>arr[i] && arr[i]<arr[i+1]){
                list.push(arr[i+1])
            }
            }
    length.push(list.length)
    return {list,length}
}
console.log(findLongestChain([5,1,2,3,0,4,6]))