// promises 
// 3 states -> pending, fulfilled, rejected

const myPromises = new Promise ((resolve, reject) =>{
    const error = false
    if(!error){
        resolve("yes resolve the promises")
    }else{
        reject("no, rejected the promises")
    }
})
console.log(myPromises) // its return the promises states 

const myNextPromises = new Promise ((resolve, reject)=>{
    setTimeout(function(){
        resolve("myNextPromis Resolve")
    }, 3000)
})
console.log(myNextPromises) // pending promises state

myNextPromises.then((value)=>{
    console.log(value)
})


myPromises 
.then((value)=>{
    return value + " chain event" // this is chain event
    console.log(value) // its return the value 
})
.then((newValue)=>{
    console.log(newValue) 
})
.catch((err)=>{
    console.log(err) //  if promises state rejected its help to show the value simply  its catch the error
})

//fatch always given a promise

const users = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json()
}).then((users)=>{
    console.log(users)
    users.forEach(user => {
        console.log(user)
        // console.log(user.email)
    });
})

console.log(users)

//after long time its also non readable so introduce async and await at 2017