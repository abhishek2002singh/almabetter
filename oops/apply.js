const person1 ={
    fname:'kamal',
    lname:'yadav'
}

const person2 = {
    fname:'abhishek',
    lname:'yadav'
}

function print(messege){
    console.log(`my name is ${this.fname} ${this.lname} and ${messege}`)
}

print.apply(person1 ,['i am belonging to up'])
print.apply(person2 ,['i am belonging to mumbai'])