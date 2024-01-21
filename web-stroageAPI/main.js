document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState==="complete"){
        console.log("Complete")
        initApp()
    }
})

const initApp = () =>{
    const myObj = {
        name : "Krishna",
        frdName: ["udesh", "Deepan", "Karthi"],
        logName: function(){
            console.log(this.name)
        }
    }
    //window is not mandetary
    window.sessionStorage.setItem("mySession",JSON.stringify(myObj))
    const key = sessionStorage.key(0)
    console.log(key)
    const mySessionData = JSON.parse(sessionStorage.getItem("mySession"))

    console.log(mySessionData)

    localStorage.setItem("mySession",JSON.stringify(myObj))
    const key1 = localStorage.length
    console.log(key1)
    const mySessionData1 = JSON.parse(sessionStorage.getItem("mySession"))

    console.log(mySessionData1)
}