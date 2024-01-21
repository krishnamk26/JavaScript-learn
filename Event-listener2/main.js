document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState==="complete"){
        console.log("Complete");
        initApp();
    }
})

const initApp=()=>{
    const view = document.querySelector("#view3")
    const myForm = document.querySelector("#myForm")
    myForm.addEventListener("submit", (event)=>{
        event.preventDefault()
        //event.preventDefault() its protect the page reload problem
        console.log("Submit")
    })
}