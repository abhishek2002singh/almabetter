const person1 ={
    fname:'ajeet',
    lname:'yadav'
}

const person2 ={
    fname:'ujjwal',
    lname:'yadav'
}

function printdelails(city , state){
    console.log(`my full name is ${this.fname} ${this.lname} and i am belonging to ${city} ${state}`)
}

printdelails.call(person1)
printdelails.call(person2)

//  in call method we can pass more than one parameter

printdelails.call(person1 , 'prayagraj' , 'utter pradesh')
printdelails.call(person2 , 'thana' , 'mumbai')