// console.log("First")

// setTimeout(()=>{
//     console.log("Second")
// },2000)

// console.log("Third")


// js engine is v8
// console.log -> call stack main -> web api (console source code)-> call stack -> display

//button click -> js initialize the code line by line at time the button onclick onchange all events on the callback queue ->  if click that event there event loop send to-> call stack -> function run

// callback function (callback hell)

const production = ()=>{
    setTimeout(()=>{
        console.log("1")
        setTimeout(()=>{
            console.log("2")
            setTimeout(()=>{
                console.log("3")
                setTimeout(()=>{
                    console.log("4")
                    setTimeout(()=>{
                        console.log("5")
                    },4000)
                },3000)
            },2000)
        },1000)
    })
}
production() // chain of evevnts

// this is called callback hell its now cant used for its not to easy for read the code 