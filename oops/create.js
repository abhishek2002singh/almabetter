//create object using object literal

// const person = {
//     fname:'abhishek',
//     lname:'yadav',

//     printfullname: function(){
//         return `${this.fname} ${this.lname}`
//     } 
// }

// console.log(person.fname)
// console.log(person.printfullname())

// //  create object using object.create

// const person1 = Object.create(person)
// person1.fname = 'kamal'
// person1.lname = 'yadav'

// console.log(person1.fname)
// console.log(person1.printfullname())


// make object through object constructor means use new keyword

// function person(fname , lname){
//    this.fname=fname
//    this.lname = lname

//    this.person1 = function(){
//     return `my first name is ${fname} and last name is ${lname}`
//    }
// }

// const p1 = new person('abhishek' , 'yadav')
// console.log(p1.fname)
// console.log(p1.lname)
// console.log(p1.person1())


//  make object use class keyword


// class person{
    
//     //constructor

//    constructor (fname , lname){
//     this.fname = fname
//     this.lname = lname
//    }

//    //  method

//    printfullname = function(){
//     return `my first name is ${this.fname} and my second name is ${this.lname}`
//    }
// }

// const p1 = new person('abhishek' , 'yadav')
// console.log(p1.fname)
// console.log(p1.printfullname())



//  is js object oriented  =yes js is prototype based object oriented language . it has no class in js.but es6 and es2015 introduce class and class based inheritence

// js is not strict object oriented . because it has no class , prototype inheritence , first class function ,and dynamic typing

// let person = {
//     fname:'abhishek',
//     lname:'yadav',

//     printfullname : function(){
//         console.log(`my name is ${this.fname} ${person.lname}`)
//     }
// }

// person.printfullname()