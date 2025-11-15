import { isEvenNum } from "./task8.ts";
const testcase = [
    {
        input:0,
        expected:true
    },
    {
        input:12.3,
        expected:false
    },
    {
        input:(2-2)/0,
        expected:false
    },
    {
        input:-12,
        expected:true
    },
    {
        input:-97,
        expected:false
    },
    {
        input:[12],
        expected:'Invalid'
    },
    {
        input:109+4,
        expected:false
    },
    {
        input:'17',
        expected:'Invalid'
    },
    {
        input:+'20',
        expected:true
    },
    {
        input:undefined,
        expected:'Invalid'
    },
    {
        input:null,
        expected:'Invalid'
    },
    {
        input:-13-3,
        expected:true
    }
]
testcase.forEach((item,index)=>{
    const output = isEvenNum(item.input)
    const pass = output === item.expected

    console.log(`-----${index+1}----`)
    console.log(`Test ${index+1}:`,pass?'Passed':'Failed')
    console.log(`Expected: ${item.expected}`)
    console.log(`output: ${output}`)
})