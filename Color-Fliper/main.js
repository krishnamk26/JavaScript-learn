const click = document.getElementById("btn");
const color = document.querySelector(".color")
// console.log(click);
const colors = [
  "Coral",
  "SkyBlue",
  "Lavender",
  "Gold",
  "SlateGray",
  "Orchid",
  "CornflowerBlue",
  "MediumSpringGreen",
  "Salmon",
];

click.addEventListener("click", function(){
 const randomColor = getRandomColor()
 console.log(randomColor)

 document.body.style.backgroundColor = colors[randomColor]
color.textContent = colors[randomColor]
color.style.color=colors[randomColor]
})

const getRandomColor = ()=>{
    return Math.floor(Math.random () * colors.length)
}