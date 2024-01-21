const initGame = () =>{
    const startGame = confirm("Shall we Play Rock, Papper, or Scissor ?")
    startGame ? playgame() : alert("Ok, May be next time")
}

const playgame = () =>{
    while(true){
        let playerChoice = getPlayerChoice();
        playerChoice = formetPlayerChoice(playerChoice);
        if(playerChoice===""){
            invaildChoice();
            continue;
        }
        if(!playerChoice){
            decideNotPlay();
            break
        }
        playerChoice = evaluvatePlayerChoice(playerChoice);
        if(!playerChoice){
            invaildChoice();
            continue
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice,computerChoice)
        displayResult(result)
        if(askToPlayAgain()){
            continue
        }
        else{
            thanksForPlaying();
            break
        }
    }
}

const getPlayerChoice =()=>{
    return prompt("Please enter rock, papper, or scissors")
}
const formetPlayerChoice=(playerChoice)=>{
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase()
    }else{
        return false
    }
}
const decideNotPlay=()=>{
    return alert("I Guess you changed your mind, May be next time")
}
const invaildChoice=()=>{
    return alert("You Did'n Enter rock , papper or sicssor")
}
const evaluvatePlayerChoice=(playerChoice) =>{
    if(
        playerChoice==="rock"||
        playerChoice==="papper"||
        playerChoice==="siscssor"
    ){
        return playerChoice
    }else{
        return false
    }
}
const getComputerChoice=()=>{
    const randomNumber = Math.floor(Math.random()*3);
    const array = ["rock","papper","siscssor"]
    return array[randomNumber]
}

const determineWinner=(playerone,computer)=>{
    const winner =  playerone === computer ? "Game Tie" : playerone === "rock" && computer === "papper" ? `Playerone: ${playerone} \nComputer: ${computer} \nComputer win`:playerone === "papper" && computer === "sicssor" ? `Playerone: ${playerone} \nComputer: ${computer} \nComputer win`:playerone === "sicssor" && computer === "papper" ? `Playerone: ${playerone} \nComputer: ${computer} \nComputer win`: "\nPlayerone win"
    return winner;
}
const displayResult=(result)=>{
    alert(result)
}
const askToPlayAgain=()=>{
    return confirm("Play Again?")
}
const thanksForPlaying=()=>{
    alert("ok thanks for playing")
}

initGame();