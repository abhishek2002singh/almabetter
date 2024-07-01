 //map == map((currentElement, indexOfElement, array) => { ... } );
// Parameters:
// callback: A function to execute for each element, taking three arguments:
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array map was called upon.
// thisArg (optional): Value to use as this when executing callback.
// Return Value:
// A new array with the results of calling the provided function on every element in the array.


// does not modify original array . gives new array

// const arr = [1,2,3,4,5,6]
//  const result= arr.map((item)=>{
//     // console.log(item)
//     return 2*item
// })

// console.log(result)
// console.log(arr)

// const person=[
//     {
//         fname:'kamal',
//         lnama:'yadav1',
//         age:18

//     },
//     {
//         fname:'ajeet',
//         lnama:'yadav2 ',
//         age:16

//     },
//     {
//         fname:'ujjwal',
//         lnama:'yadav3',
//         age:15

//     },
//     {
//         fname:'kamal2',
//         lnama:'yadav4',
//         age:8

//     },
// ]

// const result = person.map((item)=>{
//     return item.age
// })

// console.log(result)


// let s= 'hello word'
// let arr = s.split(' ')
// console.log(arr)

// function sayHello() {
//     return "Hello, ";
//   }
  
//   function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
//   }
//   greeting(sayHello, "JavaScript!");


// function sayHi() {
//     return (() => 0)();
//   }
//   console.log(typeof sayHi());


// function ass(){
//   a=10
//     console.log(a)
// }

// ass()
// console.log(a)

// if(5>2){
//    let a=10
//    console.log(a)
// }
// console.log(a)

function one(a,a,b){
    return a+a+b
}
console.log(one(1,2,3))