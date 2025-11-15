import { groupAnagram } from "./task2.ts";
const tescase = [
    {
        input:['eat','tea','tan','ate','nat','bat'],
        expected:[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
    },
    {
        input:['a','b','c'],
        expected:[['a'],['b'],['c']]
    },
    {
        input:[123],
        expected:'Invalid'
    },
    {
        input:['a',0/0],
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:[1,2,4],
        expected:'Invalid'
    },
    {
        input:['a','a','b','cd'],
        expected:[['a','a'],['b'],['cd']]
    },
    {
        input:123,
        expected:'Invalid'
    }
]
tescase.forEach((item,index)=>{
    const output = groupAnagram(item.input)
    const pass = JSON.stringify(output) === JSON.stringify(item.expected)

    console.log(`----${index+1}-----`)
    console.log(`Test ${index+1}:`,pass ? 'Passed':'Failed')
    console.log(`Expected:${item.expected}`)
    console.log(`Output ${output}`)
})