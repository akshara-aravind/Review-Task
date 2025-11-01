function newArrTarget(arr,target){
    if(!Array.isArray(arr)) return 'Invalid'
    if(!arr.includes(target)) return 'Invalid'
    let result = []
    for(let i=0; i< arr.length;i++){
    if(typeof(arr[i]) !== 'number') return 'Invalid'
        let targetArr = []
    if(target === arr[i]){
      targetArr.push(arr[i])
      result.push(targetArr)
    }else {
      result.push(arr[i])
    }
    }
    return result
}
// console.log(newArrTarget([2,3,5], 2))

const testCases = [
    {
        input:[2,3,5],
        target:5,
        expected:[2,3,[5]]
    },
    {
        input:[2,3,5],
        target:0,
        expected:'Invalid'
    },
    {
        input:[2,3,4],
        target:3.0,
        expected:[2,[3],4]
    },
    {
        input:[1,2,3],
        target:-1,
        expected:'Invalid'
    },
    {
        input:[1,2,'3'],
        expected:'Invalid'
    },
    {
        input:'',
        expected:'Invalid'
    },
    {
        input:{},
        expected:'Invalid'
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:[0,0,0],
        target:0,
        expected:[[0],[0],[0]]
    },
    {
        input:[1,2,2],
        target:2,
        expected:[1,[2],[2]]
    },
    {
        input:[],
        target:0,
        expected:'Invalid'
    },
    {
        input:[{}],
        expected:'Invalid'
    },
    {
        input:[2,3,4[6]],
        target:6,
        expected:'Invalid'
    },
    {
        input:123,
        target:3,
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    }
]
testCases.forEach((item,index) => {
    const outPut = newArrTarget(item.input, item.target)
    const pass = JSON.stringify(outPut) === JSON.stringify(item.expected)

    console.log(`-----${index+1}-------`)
    console.log(`Test ${index+1}:`, pass ? "passed":'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`Output: ${outPut}`)
})