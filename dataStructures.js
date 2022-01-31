// level 2


// q-1
const removeEven=(arr)=>{
   return (arr.filter((i)=>i%2!==0))
}


// q-2
const covertCase=(str)=>{
    let newStr="";
    for(let i=0;i<newStr.length;i++){
        if(['a','e','i','o','u','A','E','I','O','U'].includes(str[i])){
            newStr=newStr+str[i].toUpperCase()
        }
        else{
            newStr=newStr+str[i]
        }
    }
    return newStr
}

// q-3
const findMax=(arr)=>{
    let max=0;
    for(let i of arr){
        if(i>max){
            max=i
        }
    }
    return max
}
