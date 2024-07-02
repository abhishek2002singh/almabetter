// let arr1 = [1,2,3,4,5]
// let arr2 = arr1

// arr1[0]=100

// console.log(arr1)
// console.log(arr2)

//here output is [ 100, 2, 3, 4, 5 ] and [ 100, 2, 3, 4, 5 ] because arr1 and arr2 reference are same in memory then modefy the value of arr1 to 100 since arr1 and arr2 reference are same then the output is same



// spread operator  ==  spread method is spread object and array . in this spread operator use thripal dot(...) . the spread operator is copy , merging and extract value from array and object


// const arr1=[1,2,3,4,5,6]
// const arr2 =[...arr1]

// arr1[0]=200

// console.log(arr1)
// console.log(arr2)

// here output is different [ 200, 2, 3, 4, 5, 6 ] and [ 1, 2, 3, 4, 5, 6 ] because when use spread operator then he make shallo copy of arr1  and then reference is same of shallow copy


// const arr = [1,2,3,4,5,6]

// console.log(...arr)


// spread operator is merge of array

// const arr1=[1,2,3,4,5]
// const arr2=[6,7,8,9]

// const mergearray = [...arr1 , ...arr2]

// console.log(mergearray)

//we can add value when merge two array

// const arr1=[1,2,3,4,5]
// const arr2=[6,7,8,9]

// const mergearray = [12,...arr1 , ...arr2]

// console.log(mergearray)


// create shallow copy

// const arr1 = [1,2,3,4,5]

// const shallocopy = [...arr1]

// console.log(shallocopy)


//  spread operator is use for object

// const person ={
//     fname:'kamal',
//     lname:"yadav",
//     age:10
// }

// const person2 ={
//     finame:'aman',
//     laname:'yadav'
// }

// const mergeobject ={ ...person,...person2}

// console.log(mergeobject)


// some extra work by spread operator

// let maxNum = Math.max(1,2)

// console.log(maxNum)

// when provide more than two number in max method then output is given correct

// const max = Math.max(1,7,6,9,1,2,3)
// console.log(max)

// if provide array in max method

// const maxarray = Math.max([1,2,3,4,5,6])

// console.log(maxarray)  // he return nan because in array max method does not work


// but use spread operator then he find max element because spread is print the individual value

// const array = [1,7,9,5,3,6,4,7,10]
// const maxelement = Math.max(...array)
// console.log(maxelement)