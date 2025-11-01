const obj = {a:1,b:{c:2,d:{e:3}}}
// function nestedObj(obj){
//     let result = {}
//     function nested(obj){
//       console.log(obj.values)
//     //  for(let key of obj){
//     //     console.log(key)
//     // //     if(Object.keys(key)){
//     // //         console.log(key)
//     // //      nested(key)  
//     // //   }else{
//     // //     result[item] 
//     // //   }
//     // }
//     // for(let value of obj){
//     //     // if(Object.values(value)){
//     //     //     nested(value)
//     //     // }else{
//     //     //     result[item]
//     //     // }
//     // }
//     // return result
// }
// return nested(obj)
// }
// nestedObj(obj)
// console.log(obj)

function nestedObj(obj){
    let result = {}
    let object = Object.keys(obj)
    let value = Object.values(obj)
    // console.log(JSON.stringify(object), JSON.stringify(value))
    for(let i=0; i< object.length;i++){
        let key = object[i]
        console.log(key)
        for(let j =0; j< value.length; j++){
            console.log(value[j])
        }
    }
}
console.log(nestedObj(obj))