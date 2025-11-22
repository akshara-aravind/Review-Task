function wordPattern(pattern:string,string:string){
    let str:string[] = string.split(' ')
    // console.log(str)
    for(let i=0; i< pattern.length;i++){
       for(let j=i+1; j<pattern.length; j++){
        // console.log(pattern[i],pattern[j])
        // console.log(str[i],str[j])
        if(pattern[i] === pattern[j]){
           for(let i=0; i<str.length;i++){
            for(let j=i+1; j<str.length;j++){
                // console.log(str[i],str[j])  
                  if(str[i] === str[j]){
                    return true
                  }
            }
           }
        }
       }
    }
    return false
}
console.log(wordPattern('abba','dog cat cat dog'))