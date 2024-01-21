//console.log("hii")
const myVariable = "Krishna krish" 
//lenth property
console.log(myVariable.length) //13
console.log("i am a gud".length) //10
//string mathod
console.log(myVariable.charAt(1)) //this is show mentioned index character ans. r
console.log(myVariable.indexOf("is")) // this is show mentioned character index (which one is apper at first) ans 2
console.log(myVariable.lastIndexOf("is")) // this is show mentioned character index (which one is apper at last) ans 10
console.log(myVariable.slice(5)) // nth charater to last character ans na krish
console.log(myVariable.slice(5,10)) // nth charater to nth character (5,10 this show 5-9th) ans na krish
console.log(myVariable.toUpperCase()) // to print all character to uppercase ans KRISHNA KRISH
console.log(myVariable.toLowerCase()) // to print all character to lowercase ans krishna krish
console.log(myVariable.includes("udesh")) // its check mentioned string charater it return true or false ans false
console.log(myVariable.split(" ")) // its split the mentiond charater its return a array it cant print mentioned charecter it not mentioned any thing of the string it split all the character like ['k', 'r', 'i', 's', 'h', 'n', 'a', ' ', 'k', 'r', 'i', 's', 'h']  ans ['krishna', 'krish']
console.log("Earn, Grow, Give".split(",")) // ans ['Earn', ' Grow', ' Give']

// so many of string methods available ref: string method mdn 


//chapter 3
// Number Method

const myString = "23.9854ahabd"
const myString2= 23
const myFloat=42.56958
console.log(myString2)
console.log(myString)
console.log(Number(myString)); // Number function will convert string to indiger value
console.log(Number("krish")); // its return NaN
console.log(Number(true)); // its return 1 if true value is 1 and false value is 0
console.log(Number.isInteger(myString2)) // its return enter the passing value is identify tht number or not if number its retrn true or its return false
console.log(Number.parseFloat(myString))//its return with a decimal namber and also convert string value to number 
console.log(Number.parseFloat(myFloat))
console.log(Number(parseInt(myFloat))) //its return decimal number to indiger number (whole Number)
console.log(Number.parseFloat(myFloat).toFixed(2)) // toFixed is round of the value to pass the value of the parameter and its return string

console.log(myFloat.toString()) //its convert the number to string

//Chaning

console.log(parseFloat(myString).toFixed(2).toString()); //this chaining method

// two type of isNaN
console.log(Number.isNaN("42"))
console.log(isNaN("Kris"))

// chapter 4
//Math Props and Methods


console.log(Math.PI);
console.log(Math.trunc(Math.PI)); // trunc mean round of the value
console.log(Math.round(Math.PI))
console.log(Math.round(4.89)) // its also round of the value 
console.log(Math.ceil(4.01)) // its return after the dot value if anything its return next indeger ans 5
console.log(Math.floor(4.89)) // its opp to ceil if the dot after value anything it will retrun the same value ans 4
console.log(Math.pow(4,3)) //pow mean power of squer first number is multiplay number 2nd number is how many time (4*4*4)
console.log(Math.min(10,5,8,4,9)) // its givin min number of the given value
console.log(Math.max(10,5,8,4,9))// its givin max number of the given value
console.log(Math.random()) //its given between 0-1 but it not given 1 
console.log(Math.floor(Math.random()*10)+1)//its given between 1-10 number +1 is for return a 10 if need 1-100 then give *100 


// other ref - math mdn javascript on google

//chapter 5
// code challange given string generate random
console.log(myVariable.charAt((Math.floor(Math.random()*myVariable.length))))

//chapter 6

// if statement (conditional statement)

//syntex

// if(condition){
//     //runcode
// }
// else{
//     //run this code
// }

let mobile = false
let laptop = false
let timePass=true
let buyer = "demo also available"
let replay;

if(timePass){
    replay =" Sorry, now Currently not available"
}
else if(mobile&&laptop){
    replay=`Available latest model Mobile and laptop & ${buyer}`
}
else if(mobile){
    replay = `Available latest Model Mobile and ${buyer}`
}
else if(laptop){
    replay =`Available latest Model laptop and  ${buyer}`
}
else{
    replay = "Here not availeble"
}
console.log(replay)


// here if else statement manditatry write crt order and logic bcz its check one by one if any one statisfied it return value it cant going at next step
let testScore = 95;
let grade;
let collegeStudent = true;

if(testScore>=90){
    grade = "A"
}
else if(testScore>=80){
    grade="B"
}
else if(testScore>=70){
    grade="C"
}
else if(testScore>=60){
    grade="D"
}
else{
    if(collegeStudent){
        grade="RA"
    }
    else{
        grade="F"
    }
}
console.log(grade)

// this is nested if else statement

// chapter 7

// switch statement

// its like a if else statement

// syntex 

// switch (expression or value) {
//     case choice1:
//         //run code
//         break;
//     case choice2:
//         //run different code
//         break;
//     default:
//          //run another code
//         break;
// }
switch (10) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break
    default:
        console.log("No Match")
        break;
}

// chapter 8

// ternary operater

//condition ? exprIfTrue : exprIfFalse

let course = "java"

let fees = course === "mern" ? "Fee amount = 5000" : course === "mean" ? "Fee amount = 4000": "Update soon"

console.log(`${course} course ${fees}`)

//challange

let player = "paper"
let computer = "paper"

let result = player===computer? "Match Tie!" : player==="rock" && computer==="paper" ? "Computer win": player ==="paper" && computer==="sissor" ? "Computer win": player ==="sissor" && computer==="rock" ? "Computer win": "Player win"
console.log(result)

//chapter 9 

// user input
// alert its show alert
// confirm its give boolen value true or false
// prompt its give input tab (string value)
// if user not given value its return null value at time use null colasing operater(??)

// let my = prompt("enter your name:")
// console.log(my ?? " you didn't enter your name")

//this prompt enter ok its given empty string value that solution using if else state

//code
// let my = prompt("enter your name:")
// if(my){
//     console.log(my ?? " you didn't enter your name")
// }
// else{
//     console.log(" you didn't enter your name")
// } //promt so commend the code
//console.log(my.trim().length) // trim is dlt the extra spaces 

