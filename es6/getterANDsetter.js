//getter and setter --- 

// getter method  ==  getter method is access properties of object

// const person ={
//     fname:'abhishek',
//     lname:'yadav',

//     get findname(){
//         return(this.fname)
//     }
// }

// console.log(person.findname)


// setter method  ===  setter method is set properties of object


const person = {
    fname:'kamal',
    lname:'yadav',
    _age:20,

    set age(newage){
        if(newage>20&&newage<120)
            this._age=newage
        else{
            console.log('invalid age are considers')
        }
    }
}

person.age=40;
console.log(person._age)

