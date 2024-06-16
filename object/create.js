// in javascript object is a collection of a key value pair 

//create object in javascript 
//1.literal method or normal method
// 2. use constructor method

// let person = {
//     name:'kamal',
//     age :18
// }

// console.log(person.name)
// console.log(person.age)

// let person1 =new Object()
// person1.name="kamala shankar"
// person1.adderess="naugavan"
// person1.age=21
// console.log(person1.adderess)

//object properties -- two main ways to access object properties 1.use dot method  2.use bracket

// let person = {
//     name:"abhishek",
//     age: 22,
//     education:'graduate'
// }
// console.log(person.education)
// console.log(person['age'])
// console.log(person['name'])


//nexted object

let person = {
    name:'abhishek',
    last :'yadav',
    age:'22',
    address:{
        village:'naugavan',
        post:'belsara',
        city:"prayagraj"
    }

}

// console.log(person.name)
// console.log(person['last'])
// console.log(person.address)
// console.log(person.address.city)
// console.log(person['address']['post'])

person.father='vijay'
// console.log(person.father)

delete person.father

console.log(person)