// //object key  --  this method returns an array of all the key of object

// const myobj = {
//     name:'lalu',
//     age:20,
//     address:{
//        village:'naugavan',
//        post:'belsara'
//     }
// }

// console.log(typeof(Object.keys(myobj)[0]))
// console.log(Object.keys(myobj)[0])

// // console.log(Object.keys(myobj))


// Object values  -- this method returns an array all the value of an object

// const myobj= {
//     name:'ajeet',
//     lastName:'yadav',
//     age:16
// }

// console.log(Object.values(myobj))


//object entries  ---   this method return an array of array , where each sub array contains a key value pairs  of the object


// const myobj = {
//     name:'abhishek',
//     lastName:'yadav',
//     age:22
// }

// console.log(Object.entries(myobj))



//object assign ---   this method is use to copy the value of all  enumerable own  properties from one or more source  object to a target objects


// const person = {
//     name:'ujjwal',
//     lastName:'yadav'
// }

// const person1 = {
//     age:16,
    
// }

// Object.assign(person , person1)
// console.log(person)


// object freeze  --  this method is use to prevent  an object from being modifying

// const myobj = {
//     name:'kamal',
//     lastName:'yadav'
// }

// Object.freeze(myobj)
// myobj.age =30

// console.log(myobj)



// custom method  --  an object can be cantain a function as one of its properties . these function are called method when they are attached to an object 


const myobj = {
    name:'abhishek',
    lastName:'yadav',
    age:22,
    education:function(){
        console.log('namste bhai log')
    }
}
console.log(myobj)
console.log(myobj.education)
console.log(myobj.education())
myobj.education()