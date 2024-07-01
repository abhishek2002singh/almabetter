// this keyword ==  this keyword in js is a fundamental concept that refer to current execution context or function

// here more fundamental concept of this 

// 1 . use normal this keyword

// console.log(this)

// 2 . in function 

// function person(){
//     console.log(this)
// }
// person()

//  person =()=>{
//     console.log(this)
// }
// person()

// 3.. method invocation == 

// let animal = {
//     type:'lion',
//     // checkanimal : function(){
//     //       console.log(`this is ${this.type}`)
//     // }
    
// }
// animal.checkanimal()


// if does not defined any things then return whole object

//const person ={
//     fname:'kamal',
//     check:function(){
//         console.log(this)
//     }
// }
// person.check()

 
// constructor invocation


function Person(name) {
    this.name = name;
  }
  
  const person = new Person("Alice");
  console.log(person.name); // Output: Alice