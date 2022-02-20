let num = [5,4,3,2,1,0]

const addAll=(num)=>{
   let sum = 0
    for(let i=0; i < num.length ; i++){
    sum = sum + num[i]
    }
    return sum
}
console.log(addAll(num))

const fact = (n)=>{
let factorial = 0;
for (let i = n ; i >= 0; i--){
    if(n<0){
        return null
    }else{
    factorial = factorial +i
    }
}
   return console.log(factorial);
};

fact(10);
const fact1 = (n)=>{
    if(n<0){
        return null
    }else{
    return console.log((n / 2)*(1+n))
    }
}
fact1(5)


const foo =()=>{
    return{
        bar :"yes"
    };
}

const foo1 = ()=>{

    return
{
    bar :"yes"
}
}
console.log(foo())
console.log(foo1())
console.log(0.1+0.2)
console.log(0.1+0.2==0.3)
let arr1 = "john".split("")
let arr2 = arr1.reverse()
let arr3 = "jones".split("")

arr2.push(arr3)
console.log(arr1.length + arr1.slice(-1))
