function Person(fname){
    this.fname= fname
}

Person.prototype.greet = function(){
    console.log(`hello my name is ${this.fname}`)
}

const person  =new Person('abhishek')
person.greet()