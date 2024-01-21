const view1= document.getElementById ("view1");
console.log(view1);

const view2 = document.getElementById ("view2")
console.log(view2)

view2.style.display="flex"
view1.style.display = "none"


view2.lastElementChild.remove()

const createDiv =(parent, int)=>{
    const newDiv = document.createElement("div")
    newDiv.textContent=int
    newDiv.style.width="100px"
    newDiv.style.height="100px"
    newDiv.style.margin="10px"
    newDiv.style.display="flex"
    newDiv.style.justifyContent="center"
    newDiv.style.alignItems="center"
    newDiv.style.color="black"
    newDiv.style.backgroundColor = "yellow"
    parent.append(newDiv)
}
for(let i=1; i<=12; i++){
    createDiv(view2, i);
}