const reg = /best/g

const str='best again best'

// exec method

// let res = reg.exec(str)

// console.log(res)

// res = reg.exec(str)

// console.log(res)   this is return either null or array
// but this is case senstive
 
// const str1 = "Best again Best"

// let result = reg.exec(str1)

// console.log(result)

// if we use ig then remove case senstive problem



// test method == he return boolean means true and false


// const res=reg.test(str)

// console.log(res)



//  match method ==  this method return array

const res = str.match(reg)
console.log(res)