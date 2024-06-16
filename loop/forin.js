//use for in loop

//use in array

// var arr =[5 , 6 , 9 , 7 , 2 , 1 ]
// for(let index in arr){
//     // console.log(typeof(index))
//     // console.log(typeof{index})
//     console.log(typeof(arr[index]))
// }


// use in object

var object = {
    "1":"kamal",
    "2":"lalu"
}

for(var index in object){
    console.log(index )
    console.log(`${object[index]}`)
}