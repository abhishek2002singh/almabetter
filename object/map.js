//javascript map   ----   in javascript , a map is a build in object that allow you to store key value pair . where each key can be of any data type , and each value can also be any data type 

//create map ==  you can create a map in javascript using any new keyword with the map constructure 

const mymap = new Map()

//add and remove entries

mymap.set('name','abhishek')
mymap.set('lastName','yadav')
mymap.set('age',22)
// console.log(typeof(mymap))
// mymap.delete('age')
// console.log(mymap)

// //clear map

// mymap.clear()
// console.log(mymap)


//size of map

// console.log(mymap.size)


//element exist or not 

// console.log(mymap.has('name'))
// console.log(mymap.has('address'))


//get the value of key 

// console.log(mymap.get('name'))
// console.log(mymap.get('lastName'))


//iterate through a map
// use foteach method

// mymap.forEach((items,keys)=>{
//     console.log(`${keys}--${items}`)
// })

//convert a map to array

const array = Array.from(mymap)
console.log(array)