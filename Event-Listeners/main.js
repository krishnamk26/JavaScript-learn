// const view = document.querySelector("#view2")
// console.log(view)
// const div = view.querySelector("div")
// const h2 = div.querySelector("h2")

// console.log(h2)

// syntex
// addeventListeners("event", function, usecapture(default value false))

// const doSometing =()=>{
//     alert("clicked 200")
// }
// h2.addEventListener("click", doSometing)
// h2.removeEventListener("click", doSometing)

// h2.addEventListener("click", (event)=>{
//     // console.log(event.target)
//     event.target.textContent = "clicked"
// })


// readystatechange is initial the app works

document.addEventListener("readystatechange", (event)=>{ 
    if(event.target.readyState === "complete"){
    console.log("Complete")
    initApp()
}
})

const initApp = ()=>{
    const view = document.querySelector("#view2")
console.log(view)
const div = view.querySelector("div")
const h2 = div.querySelector("h2")
console.log(h2)

//event public up (changes happen on child to parent)
view.addEventListener("click", (event)=>{
    view.classList.toggle("orange")
    view.classList.toggle("darkblue")
    //toggle is change the class name (JS)
    // view.style.backgroundColor = "Orange"
})
div.addEventListener("click", (event)=>{
    div.classList.toggle("brown")
    div.classList.toggle("black")
    // div.style.backgroundColor="brown"
    div.style.borderRadius="100px"
})
h2.addEventListener("click", (event)=>{
    //event.stopPropagation()
    //event.target.textContent = "Clicked"
    const myText = event.target.textContent
    myText === "Clicked" ? (event.target.textContent = "Click") : (event.target.textContent = "Clicked") 
    //h2.style.color="pink"
    // 
})
// this useCapture is default value so if click the grandchild it change the parent element also : or change the value at true its a event public down (chnages happen on outside to inside eg : parent to child)

// only child only change use "event.stopPropagation()" in the child
}
