//  asynchronous coding in javascript 

//  by default js is follow synchronous coding

// this code block the main thread

// function task(message){
//     let i=10000000000
//     while(i>0){
//         i--;
//     }
//     console.log(message)
// }

// console.log('task start')
// task('task running')
// console.log('task completed')


// but while use asynchronous method then main thread not block

// console.log('one')
// console.log('two')
// setTimeout(()=>{
//     console.log('three')
// },0)

// console.log('four')

// function task(message){
//     console.log(message)
// }
// console.log('task start')
// setTimeout(() => {

//     task('task running')
// }, 4000);

// console.log('task complete')



// set timeout  ==  this method used a execution a function once after a specified delay. he is accept two parameter 1.call back functiion  2. time daley

// function per(){
//     console.log('hii my name is abhishek singh')
// }

// setTimeout(()=>{
//     console.log('hii my age is 22')
//     per()
// },3000)

// console.log('complete')


// function per(){
//     console.log('hii my name is abhishek singh')
// }

// setTimeout(per(), 3000)

// in set time out can pass extra argumrnt like arg1 , arg2 ,arg3

// function per(name  , age){
//     console.log(`my name is ${name} and my age is ${age}`)
// }

// setTimeout(per , 3000 , 'abhishek', 22);



// setimeinterval ===  in set time interval the execution is run a time interval in infite time 

// let num = 2
// function per(){
//     num++
//     console.log(num)
// }

// setInterval(per , 3000)

// function per(name , age){
//     console.log(`my name is ${name} and my age is ${age}`)
// }

// setInterval(per , 2000 ,'abhishek',22)


// set time out and set time interval give numerical value means give a identifier id who is revelent to its

//cleartimeout ===  clear time out eraze set time out data

// function per(){
//     console.log('hello1')
// }

//  const time = setTimeout(per , 1000)

//  clearTimeout(time)
//  console.log('hello')


//clearinterval ==  clear interval eraze the interval data

