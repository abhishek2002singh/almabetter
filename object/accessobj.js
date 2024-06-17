// access object method ---   you can access an object method using dot notation or bracket notation

//access object properties  --  you can access properties by calling an object name and a key 

//access object method --  you can access a method by calling an object name and key that method along with ()

// const obj = {
//     name:'abhishek',
//     lastname:'yadav',
//     age:22,
//     greet:function(){
//         console.log('hii am abhishek yadav')
//     }
// }

// obj.greet()
// console.log(obj.greet)
// obj['greet']()

// // adding object method 

// obj.address = function(){
//     console.log('naugavan , belsara , karchhana ,  allahabad')
// }

// console.log(obj.address)

// this keyword


const obj = {
    name:'abhishek',
    lastname:'yadav',
    age:22,
    greet:function(){
        console.log('my name is ' + this.name +' '+this.lastname +' my age is ' + this.age)
    }
}

obj.greet()