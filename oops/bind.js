// const person1 ={
//     fname:'kamal',
//     lname:'yadav'
// }

// const person2 = {
//     fname:'abhishek',
//     lname:'yadav'
// }

// function print(messege){
//     console.log(`my name is ${this.fname} ${this.lname} and ${messege}`)
// }

//  const all = print.bind(person1 )
// const all2 = print.bind(person2 )
// all()
// all2()


const arr = [1, 2, 3];
arr.forEach((elem) => {
arr.push(elem * 2);
});
console.log(arr);