// level 2

// Write a function in Javascript to print the sum of the first n fibonacci numbers.

const calculateSum=(n)=>{
    let f1=1;
    let f2=1;
    let sum=0;
    for(let i=2;i<n;i++){
    let f3=f1+f2;
       f1=f2;
       f2=f3;
       sum+=f3;
    }
    return sum;
}
