// 1
// What will be the output of the following code?
// const add = x => y => x + y;
// const addFive = add(5);
// console.log(addFive(2));
// Your Answer
// 7
// Correct Answer
// 7
// Justification
// The given code defines a higher-order function add() that takes a parameter x and returns a new function that takes another parameter y and returns the sum of x and y.
// 2
// What is functional programming?
// Your Answer
// A programming paradigm designed to handle pure mathematical functions
// Correct Answer
// A programming paradigm designed to handle pure mathematical functions
// Justification
// Functional programming is a programming paradigm that uses pure mathematical functions to build software. It avoids changing state and mutable data, and instead focuses on immutable data structures. It emphasizes the use of functions as first-class citizens and aims to write more concise and modular code.
// 3
// What is a pure function in JavaScript?
// Your Answer
// A function that always returns the same output for the same input
// Correct Answer
// A function that always returns the same output for the same input
// Justification
// A pure function in JavaScript always returns the same output for the same input, and does not have any side-effects or dependencies on external variables or data. It does not modify external data structures and is predictable, easier to reason about and optimize.
// 4
// What will be the output of the following code?
// function sayHello() {
//   return "Hello, ";
// }

// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");
// Your Answer
// "Hello, JavaScript!"
// Correct Answer
// "Hello, JavaScript!"
// Justification
// The code defines two functions: sayHello() and greeting(). sayHello() returns the string "Hello, ". greeting() takes two arguments: a function and a name. Inside greeting() , the function passed as the first argument is called, which is sayHello() . This results in the string "Hello, " being returned. The greeting() function then concatenates this string with the second argument and logs the result to the console. When greeting(sayHello, "JavaScript!") is called, the output will be "Hello, JavaScript!".
// 5
// What will be the output of the following code?
// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi());
// Your Answer
// "number"
// Correct Answer
// "number"
// Justification
// The sayHi function returns the result of immediately invoking an arrow function that always returns 0. This means that the result of calling sayHi will always be 0. The typeof operator is used to determine the type of the value returned by sayHi. Since sayHi returns a number, the output of typeof sayHi() will be "number".
// 6
// What is the characteristic of primitive types in JavaScript?
// Your Answer
// Weakly Immutable
// Correct Answer
// Weakly Immutable
// Justification
// Weakly immutable means that a value can be changed, but only under certain circumstances or conditions
// 7
// What will be the output of the following code?
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.filter(num => num % 2 === 0)
//   .map(num => num * 2)
//   .reduce((acc, num) => acc + num, 0);

// console.log(result);
// Your Answer
// 12
// Correct Answer
// 12
// Justification
// The given code uses array methods filter, map, and reduce to compute a result from an array of numbers. The filter method is used to create a new array containing only the even numbers from the original array [2, 4]. The map method is used to create a new array containing the doubled values of each number in the filtered array [4, 8]. Finally, the reduce method is used to compute the sum of the numbers in the mapped array, starting from an initial value of 0. Therefore, the correct answer is 12.
// 8
// How does functional programming increase maintainability of the code?
// Your Answer
// By increasing modularity
// Correct Answer
// By increasing modularity
// Justification
// Functional programming increases maintainability of the code by increasing modularity. This is achieved by using pure functions and immutable data structures, which reduces side effects and makes it easier to reason about and test the code. The modular code can be easily reused in different parts of the codebase, making it more maintainable over time. Furthermore, functional programming reduces the reliance on mutable data, which can lead to bugs and make the code harder to maintain.
// 9
// What is the main advantage of functional programming in solving complex problems?
// Your Answer
// Increased code maintainability
// Correct Answer
// Reusability of code
// Justification
// The main advantage of functional programming in solving complex problems is the reusability of code. By using pure functions and immutable data structures, functional programming allows for more modular and reusable code, which can be easily adapted to solve different problems
// 10
// Which of the following is/are an example(s) of High order function?
// Your Answer
// map()
// reduce()
// filter()
// Correct Answer
// map()
// reduce()
// filter()
// Justification
// All of the options 1, 2, 4 are examples of higher-order functions in JavaScript. A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
