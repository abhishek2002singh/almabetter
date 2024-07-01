// class person {
    
//     // constructor

//     //method1 (parameter)

//     //method code

//     //method2 (parameter)

//     // method2 code

//     //... ...more method
// }

class person {

    //constructor
    constructor(fname,lname,age){
        this.fname= fname
        this.lname= lname
        this.age = age
    }

     printfullname(){
       console.log(`my name is ${this.fname} ${this.lname} and my age is ${this.age}`) 
    }
}

//create instance of object class

const p1 =new person('abhishek' , 'yadav' , 22)
const p2 =new person('kamal' , 'yadav' ,18)
p1.printfullname()
p2.printfullname()


//note == class keyword only support es6 and es2015 . not support old version 