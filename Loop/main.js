//chapter 11
//loops

//while loop
let i = 1
while (i<=10) {
    //console.log(i)
    i = i+1
}

//do while loop
// do while loop is used for atlest one time run on the condition

let j = 50
do {
    //console.log(j)
    j = j+1
} while (j<50);

//for loop
for (let k = 1; k <=5; k++) {
    //console.log(k)
}

let name1 = "krish"

for (let n = 0; n <= name1.length; n++) {
    //console.log(name1.charAt(n));  
}

// chapter 12
//break its brake the code on mentiond value
// continue
// continue mean skip the mentioned value
let text = ""
for (let t = 1; t<=5; t++){
    if(t===3){
        continue
    }
    text = text+t
}
//console.log(text)

//chapter 13
// functions

function sum(num1,num2){
    return(num1+num2)
}
console.log(sum(10,6))
console.log(sum(15,12))

let email = "krish@gmail.com" // get only user name

console.log(email.slice(0, email.indexOf("@")))

// same thing on function its can use anywhere in our code

function getUserNameFromEmail(email){
    return(email.slice(0, email.indexOf("@")))
}
console.log(getUserNameFromEmail("krishna1@gmail.com"))
console.log(getUserNameFromEmail("krish@gmail.com"))

// function for propercase first latter caps
// diffrent way to create functions 

//const toProperCase = function(name){
//function toProperCase (name){
const toProperCase = (name) =>{
    return(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())
}
console.log(toProperCase("krIsHna"))

//chapter 14

//scope let var const

// global scope
// local scope 
    //block scope
    //function scope

//chapter 15

//arrays

const myArray = [];

myArray[0] = "krishna"
myArray[1]= "deepan"
myArray[2]= 1458
myArray[3] = true

console.log(myArray)

console.log(myArray[1])
console.log(myArray[myArray.length-1])

myArray.push("udesh") // push the value at the arrey it store on last one
console.log(myArray)

myArray.pop() // its dlt the last one in the array
console.log(myArray)

myArray.unshift("udesh") // add a value at first one
console.log(myArray)

myArray.shift() // dlt a value at first one
console.log(myArray)

const lastItem = myArray.push("karthi")
console.log(lastItem) // if add value using variable that variable will give length ans 5

const firstItem = myArray.unshift("udesh")
console.log(myArray)
console.log(firstItem)

const lastItem1 = myArray.pop()
console.log(lastItem1) // if use pop or shift using variable that dlt vlaue store at the variable if call the variable ans karthi same as shift ans udesh

// if anything middle of the array value dlt using two ways one directly using delete.myArray[index position] but here one problem the mentioned index position will store at empty and if i call the position its give undefind best solition is using splice

myArray.splice(2,2) // passing two parameter first one is position on dlt value and 2nd one is how many value dlt
console.log(myArray)

//splice also used replce the value and add
myArray.splice(2,1,"deepan")
console.log(myArray)

myArray.splice(2,0,"karthi") // first one is added value position, 2nd one is 0, and value
console.log(myArray)

// slice is take a copy of array

const newArray = myArray.slice(1) // here pass two parameter as per requrement if pass single parameter its consider parameter position to end of the array & given 2 parameter thats copy of the given position array
console.log(newArray)

// myArray.reverce is reverce the total array
// myArray.join its that total array convert a single string value. if need to again convert the value at array use split(,) common value , is split the value and given at array here one problem if there any indiger or boleean value that also convert at array string

// join the two arrays
// there two ways one is using concot() and another one is spered oprater(...)

myNewArray=["udesh",18,true]

//using spred oprater

const joinArray = [...myArray,...myNewArray]

// const joinArray = myArray.concat(myNewArray)

console.log(joinArray)
