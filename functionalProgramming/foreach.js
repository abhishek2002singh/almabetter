// foreach == foreach is does not return any value , means return undefinide. it is iterate every value . this is not a function. it is a method
// does not modify original array

// const arr = [1,2,3,4,5,6]
//  let result = arr.forEach((item)=>{
//     // console.log(item)
//     return 2*item
    
// })

// console.log(result)


const fruitlist = ['apple' , 'mangoo' , "payaya" , 'banana' ]
fruitlist.forEach((item)=>{
    console.log(item)
})


//array.forEach(callback(currentValue, index, array), thisArg);