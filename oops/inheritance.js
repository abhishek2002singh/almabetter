// // Do not remove nor make any changes in  main() function
// function main() {
//     var radius = parseInt(readLine());

// 	// Create an instance of Circle
// 	const circle = new Circle(radius);

// 	// Compute and print the area
// 	console.log("Area:", circle.getArea());

// 	// Compute and print the circumference
// 	console.log("Circumference:", circle.getCircumference());
// }

// class Circle {
//   // Your code goes here
//   constructor(radius){
//     this.radius =radius
//   }
//   getArea(){
//     return 3.14*this.radius*this.radius
//   }
//    getCircumference(){
//     return2* 3.14*this.radius
//   }

// }

// function foo() {
// console.log('Hello, world!');
// bar();
// }
// function bar() {
// console.log('Goodbye, world!');
// }
// setTimeout(foo, 1000);



// function getName() {
//     var name = "Jon";
//     function printName() {
//     console.log(name);
//     }
//     printName();
//     }
//      getName();/



// let person = {
//     name: "John",
//     age: 30
//     };
//     let clone = Object.assign({}, person);
//     clone.age = 25;
//     console.log(person.age);



// const test = () => {
//     return 1 + 2;
//     }
//     console.log(test())


// let person1 = {name: "John", age: 30};
// let person2 = {name: "John", age: 30};
// console.log(person1 === person2);


// let x = 10;
// function myFunc(y){
// y = 12;
// }
// console.log(myFunc(x));

// var x = "hello";
// if (x) {
// console.log("Hello");
// } else {
// console.log("World");
// }


// let person = {name: "John", age: 30};
// person.salary = 5000;
// delete person.salary;
// console.log(person.hasOwnProperty("salary"));



// var x = 0;
// function foo() {
// x++;
// console.log(x);
// }
// var timerId = setInterval(foo, 1000);
// setTimeout(function() {
// clearInterval(timerId);
// }, 5000);


// var x = 0;
// setTimeout(function() {
//  x++;
// }, 1000);
// setTimeout(function() {
//  console.log(x);
// }, 2000);


// const badCode = () => {
//     let arr = [1, 2, 3, 4];
//     const inner = () => {
//     return arr.pop();
//     };
//     return inner;
//     };
    //console.log(badCode()());


    // let person = {
    //     name: "John",
    //     age: 30,
    //     greet: function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    //     }
    //     };
    //     person.greet.call({name: "Jane", age: 25});


    // let person = {
    //     name: "John",
    //     age: 30,
    //     get fullName() {
    //     return `${this.name} Smith`;
    //     },
    //     set fullName(value) {
    //     [this.name, this.surname] = value.split(" ");
    //     }
    //     };
    //     person.fullName = "Jane Doe";
    //     console.log(person.name);



    let x = 10;
const byValue = (y) => {
 y = 20;
 return y;
}
x = byValue(x);
console.log(x);