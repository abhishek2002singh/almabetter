// json stringify ==  json stringify  is change object to json


const person = {
    fname:'kamal',
    lname:'yadav',
    age:20
}

const jsonstringigy = JSON.stringify(person)

console.log(jsonstringigy)

console.log(typeof(jsonstringigy))

//json parse() == json parse is change json to object

const jsonparse = JSON.parse(jsonstringigy)

console.log(jsonparse)

console.log(typeof jsonparse)