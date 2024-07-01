//function --- function is a block of code . which is make code reuseable . 

//type of function 
//   1.. function decleration
//  2.. function expression
// 3.. anonymous function
//  4..  arrow function
//  5..  immediately invoked function  expression (iife)
//  6.. generator function 
//  7.. recursive function

//  1..  function decleration

// function add(a, b){
//     return a+b
// }
// console.log(add(4,5))

// function add (a,b){
//     return a+b
// }
// console.log(add())
// he return nan because does not pass any argument value


//function expressiom

// const add = function(a,b){
//     return a+b
// }
// console.log(add(4,6))



//  3.. anonymous function

// const add = (function(a,b){
//     return a+b
// })(5,6)
// console.log(add)


// 4.. arrow function -- arrow is a mordern way to decler a  function . this is introduce in es6 model.do not have their own this or arguments context, using the context of the surrounding code instead.

// const add= (a,b)=>a+b
// console.log(add(9,3))


// const obj = {
//     name:'abhishek',
//     lastName:'yadav',
//     age:22,
//     add:function(){
//           console.log(`${this.name}`)
//     }
// }
// obj.add()

//in array function be when does not use ant paranthsis  then use nacessary empty paranthesis

// const fun = ()=>console.log('hii everyone')
// fun()


//when arrow function then pass one argument then does not use use any parathesis

// const fun =arg=>console.log(arg)
// fun(5)

//in arrow function pass zero or one than more than use paranthesis

// const fun =(arg1  , arg2)=>arg1+arg2
// console.log(fun(10,12))

//in arrow function declaration one line does not brases but more than one line of code nacessary to use brasses


// iifc function ==  this function is declare then immediatly after call

// (function(){
//     str = "hii am abhishek yadav"
//     console.log(str)
// })()


//generator function == Generator functions allow you to pause and resume their execution using the yield keyword. They are useful for dealing with asynchronous code or producing iterable sequences.

// function* numberGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//   }
  
//   // Create a generator instance
//   const numbers = numberGenerator();
  
//   // Loop through the generated numbers
//   for (const number of numbers) {
//     console.log(number);
//   }
  


//   Recursive Functions: Recursive functions are functions that call themselves during their execution. They are useful for solving problems that involve repetitive tasks or nested data structures.


// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
//   }
  
//   console.log(factorial(5));
  


//function executation ==  function execution refer to the process to calling a invoce a function and execuation a body

