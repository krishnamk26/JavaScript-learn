//chapter 17
// obeject
// key-value pairs in curly braces
"use strict" ;
const vehicle ={
    doors:4,
    engine: function(){
        return "Voooorm!!"
    },
    action: function(){
        return `how many door in the vehicle = ${this.doors}`
    }
};
console.log(vehicle.action())
// object inculdes all the data types and functions

//Object inheritance

const car = Object.create(vehicle);
// if call car its show empty array
// if add any propertie
car.wheels = 4;
// if modified the value
car.engine = function(){return "thuuurrruuu!"}

console.log(car.engine())
console.log(car.doors)

const tesla = Object.create(car)
tesla.engine = function(){return "Slient"}

console.log(tesla.engine())

const movie = {
    actor:"kavin",
    musis:"arr",
    director:"lokesh",
    producer:"dhamu"
};
movie.comedian = "vadivel" //  add
delete movie.producer // dlt
console.log(movie.hasOwnProperty("producer")) // hasOwnProperty is return true or flase
console.log(Object.values(movie)) // its return object value only
console.log(Object.keys(movie)) // its return object keys only

for ( let job in movie){
    console.log(movie[job])// its return keys in line by line

    console.log(`${job}, its ${movie[job]}`)
}

//destructuring the objects

const {musis : myFavMusicDirector,director:myFavDirector} = movie
console.log(myFavMusicDirector)
console.log(myFavDirector) // if anywhere needs object value will asign the variable 

const {actor,musis,director,producer,comedian} = movie // this is another way here the key value cant changed same key value using for the asign as variable
console.log(comedian)

function singer ({musis}) {return musis}

console.log(singer(movie)) // using function

//chapter 18

// classes

const myPizza ={
    size:"medium",
    crust: "original",
    bake : function (){
       return console.log( `Baking a ${this.size} ${this.crust} crust pizza`)
    }
}
myPizza.bake()

// classes is like objects template

class Pizza {
    constructor(typePizza,sizePizza,crustPizza){
        this.type = typePizza
        this.size = sizePizza
        this.crust = crustPizza 
        this.tappings = []
    }
    getTopping(){
        return this.tappings
    }
    setTopping(toppingPizza){
        this.tappings.push(toppingPizza)
    } // this is best way for add another value of the keys
    bake(){
        return console.log( `Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.tappings} tappings`)
    }
}
const anotherPizza = new Pizza("Margirita","Medium","Original")
const anotherPizza1 = new Pizza("Margirita","Small","Thin")

anotherPizza.setTopping("mushroom")
anotherPizza1.setTopping("sausage")
anotherPizza.bake();
anotherPizza1.bake();

//chapter 19

//JSON - javaScript Object Notation
// text format
// language indipendent

const myObj = {
    name :"krish",
    movie:["ayalan","cobra","arul"],
    sub:function(){
        console.log("krish like movie")
    }
}
console.log(myObj)
console.log(myObj.name)
myObj.sub()

const sendJson = JSON.stringify(myObj) // obj converted to JSON format
console.log(sendJson)
console.log(sendJson.name) // undefined
console.log(typeof myObj) // object
console.log(typeof sendJson) // string

const receiveJSON = JSON.parse(sendJson) // json convert to obj

console.log(receiveJSON)
console.log(typeof receiveJSON)

//chapter 20

//Errors and Error Handling

//ReferenceError 

"use strict";  // using top of the
//variable = "krishna" 
let variable = "krishna"
console.log("variable"  + variable)// its cant have any let const var before the variable declure solution using "use strict" 

//SyntaxError 

// its cant excuted the code  like 
//Object..apply() -- syntaxError

//TypeError

const k = 18 // k is declure on const its cant declure again if declure again its show typeError

//k = 19 TypeError


//error always happen thats handle with using try catch

const makeError = () =>{
    try {
        const name  = "deepan"
        name = "arun"
    } catch (error) {
        console.log(error) // here console.log is show like a meg 
        //console.error(error) // its show errror 
        //console.warn(error) // its show warning
        //console.table(error) // its show table  
    }
}
makeError()


const makeError2 = ()=>{
    let i = 0;
    while(i<=5){
        try {
            if(i%2 !==0){
                throw new Error("Odd Number" + i)
            }
            
        } catch (error) {
            console.log(error)
        }
        finally{
            console.log("...finnaly")
            i++
        }
    }
}
makeError2()