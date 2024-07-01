// 1
// Which feature allows for easier string concatenation in ES6?
// Your Answer
// Template Literals
// Correct Answer
// Template Literals
// Justification
// Template Literals is a feature introduced in ES6 that allows for easier string concatenation. Template literals are enclosed in backticks (``) and allow for embedding of expressions using ${ } notation within the string.
// 2
// What is the purpose of using "use strict" in JavaScript?
// Your Answer
// To enforce strict typing of variables
// Correct Answer
// To enforce stricter syntax and error checking
// Justification
// The "use strict" directive enables strict mode, which enforces stricter syntax rules and better error handling in JavaScript. It helps to catch common mistakes and problematic code constructs that may cause issues at runtime. It also disallows the use of certain keywords that may be used in future versions of ECMAScript, and prevents accidental global variable declarations.
// 3
// const pi = 3.14
// console.log(pi)
// Your Answer
// None of the above
// Correct Answer
// Const turns variables into constants, and they can't be changed.
// Justification
// In the given code, the variable pi is declared using the const keyword. This keyword is used to declare variables that cannot be reassigned or redeclared, making them constants. Therefore, option (a) accurately describes the behavior of const
// 4
// What is the main benefit of using modules in JavaScript?
// Your Answer
// Encourages code reusability
// Correct Answer
// Encourages code reusability
// Justification
// Modules are a way of organizing and separating code into reusable, independent, and self-contained units. They provide a mechanism for encapsulating code and preventing conflicts between different parts of an application. By using modules, developers can improve the maintainability, reusability, and scalability of their code. Modules can be created and imported in JavaScript using different formats, such as CommonJS, AMD, and ES6 Modules.
// 5
// What is a new way to handle asynchronous programming in ES6?
// Your Answer
// Promises
// Correct Answer
// Promises
// Justification
// ES6 introduced Promises, which are a powerful tool for handling asynchronous programming. A Promise is an object that represents a value that might not be available yet, but will be at some point in the future. With Promises, you can write asynchronous code that is more readable and easier to reason about.
// 6
// Guess which one of array methods can help shorten this code?
// var arr = [12, 5, 42, 55, 10];
// function do_something(arr) {
// return arr.find(n => n > 32);
// }
// Your Answer
// arr.findIndex(n => n >32)
// Correct Answer
// arr.find(n => n>32)
// Justification
// arr.find(n => n>32) can help shorten the given code. The find() method is a new array method introduced in ES6 that returns the value of the first element in an array that satisfies a provided testing function. In this case, the testing function is a simple arrow function that checks if the current element of the array is greater than 32.
// 7
// What is a new feature introduced in ES6?
// Your Answer
// All of the above
// Correct Answer
// All of the above
// Justification
// All of the options mentioned in the question (a), (b), and (c) are new features that were introduced in ES6 (ECMAScript 6).
// 8
// Which choice is not of invoking strict mode in JavaScript?
// Your Answer
// It forces the writing of valid HTML and CSS.
// Correct Answer
// It forces the writing of valid HTML and CSS.
// Justification
// Strict mode is a feature in JavaScript that enables a stricter set of rules and error handling in the language. When strict mode is enabled, certain practices that are considered as errors in JavaScript are flagged as such and throw an error, instead of allowing them to pass silently. These practices include using undeclared variables, using reserved keywords as variable names, and attempting to write to read-only properties. Strict mode also disallows the use of certain syntax that may be added in future versions of ECMAScript.
// 9
// What are the enhancements provided by an enhanced object literal in ECMAScript 6?
// Your Answer
// All of the above
// Correct Answer
// All of the above
// Justification
// Enhanced object literals in ECMAScript 6 provide several enhancements to the syntax for defining objects. Shorthand property names allow the use of a simplified syntax to define properties with the same name as a variable. Computed property names allow the use of an expression to define a property name, which is evaluated at runtime. Method properties allow the definition of functions as object methods without using the function keyword. Overall, these enhancements make it easier and more concise to define and work with objects in JavaScript.
// 10

// let x = 150
// if(x>100){
// let x = 1
// }
// console.log(x)
// Your Answer
// Variables defined with let are available only in the nearest enclosing block.
// Correct Answer
// Variables defined with let are available only in the nearest enclosing block.
// Justification
// The let keyword introduces block scoping, which means that variables declared with let are only available within the nearest enclosing block. let variables are only available within the block scope in which they are declared. Any attempt to access them outside of that block scope will result in an error.
// Page 1 of 1