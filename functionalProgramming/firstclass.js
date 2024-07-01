// function creategreet(){
//     return  () =>{
//            console.log('hii am abhishek')
//     }
// }

// let create =creategreet()
// create()

// first class function --  when function in that language are treated like any other varivalsf

// there are say three type to functional programming

// 1 . it can be store in side a variable

// let fun = function add(a,b){
//     return a+b
// }
// console.log(fun(1,2))

// 2.. a function can be pass argument to another function

// function printgreeding(){
//     let message = 'hello'
//     print1(message)
// }

// function print1(message){
//    console.log(message)
// }

// printgreeding(print1)

// 3.. function can be return another function

// function add(a){
//     return function othernumber(b){
//         return a+b
//     }
// }
// let result = add(5)
// console.log(result(5))

//or

function add(a){
    return(b)=>{
        return a+b
    }
}
 let result = add(5)
 console.log(result(6))