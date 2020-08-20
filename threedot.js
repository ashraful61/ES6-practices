
const ages = [2,4,6]
const ages2 = [1,3,5]
const ages3 = [9, 8]
const allAges = ages.concat(ages2).concat([20]).concat(ages3)
const allAges2 = [...ages, ...ages2, 10, ...ages3]
console.log(allAges)//[ 2, 4, 6, 1, 3, 5, 20, 9, 8 ]
console.log(allAges2)//[ 2, 4, 6, 1, 3, 5, 10, 9, 8 ]
console.log(Math.max(...allAges))//20
console.log(Math.max(...allAges2))//10
