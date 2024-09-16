//use slice method

//const arr = [1,2,9,4,5,6]
// const arra=arr.slice(2 ,4)
// //  console.log(typeof(arra))
// console.log(arra)

// take only first element
// const arra = arr.slice(2)
// console.log(arra)

//take only last element 

//  const arra= arr.slice(6)
// console.log(arra)


//use splice method 

const arr = [1,2,3,4,5,6]
const arra=arr.splice(2 ,2)
console.log(arra)//delete element are printed
console.log(arr)

// const arr = [ 1,2,3,4,5,6,7]
// const  arra = arr.splice(2,0,5 , 9 ,10)
// console.log(arra) //not delete any element so does not print any element means return empty array
// console.log(arr)

// const arr = [1,2,9,4,5,6]
// const arra = arr.splice( 0,3)
// console.log(arr)


// //use indexof and lastindexof method

// const arr = [1,2,3,4,5,6]
// // console.log(arr.indexOf(4))
// const number = arr.lastIndexOf(6)
// console.log(number)

// // use include method

// const arr  = [1,2,3,4,5,6]
// const check = arr.includes(9)
// console.log(check)



// //use find method

// const arr = [1,2,3,4,5,6]
// const check = arr.find(num=>num>2)
// console.log(check)


// // use concat method

// const arr = [1,2,3,4,5,6]
// const arr1 = [7,8,9]
// const arr2 = [10 , 11 , 12]
// const arr3 = arr.concat(arr2 , arr1)
// console.log(arr3)



// // use join method

// const arr = [1,2,3,4,5,6]
// const arra = arr.join("_")
// console.log(arra)


// //use reverse method

// const arr = [1,2,3,4,5,6]
// const arra = arr.reverse()
// console.log(arra)
// console.log(arr)
