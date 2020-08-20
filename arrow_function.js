//First method
// function doubleIt(num){
//     return num*2
// }
// const result = doubleIt(8)
// console.log(result)//16


//Second method
// const doubleIt = function(num){
//     return num * 2
// }
// const result = doubleIt(5)
// console.log(result)//10



//Third method
// const doubleIt = function myFunc(num){
//     return num * 2
// }
// const result = doubleIt(9)
// console.log(result)//18



// Fourth Method
// const doubleIt = num =>{
//     return num * 2
// }
// const result = doubleIt(7)
// console.log(result)//14


// Fifth method
// const doubleIt = (num)=> num * 2
// const result = doubleIt(6)
// console.log(result)//12

// const add = (num1, num2) => num1 + num2
// const result = add(40, 50)
// console.log(result)//90

// const give5 = () => 5
// const result2 = give5(56)
// console.log(result2)//5

const exploreMore = (num1, num2) =>{
    const diff = num1 - num2
    const sum = num1 + num2
    return diff * sum
}
var result = exploreMore(8, 2)
console.log(result)/60