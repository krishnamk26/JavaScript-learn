let playgame = confirm("Shall We Paly Rock, Papper, Sicssors")
if(playgame){
    let playerChoice = prompt("please Enter rock , papper or sicssor")
    if(playerChoice){
        let playerone = playerChoice.trim().toLowerCase()
        if(playerone === "rock"||
        playerone === "papper"||
        playerone === "sicssor"
        ){
            let computerChoice = Math.floor(Math.random()*3+1)
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "papper": "sicssor"

            let result = playerone === computer ? "Game Tie" : playerone === "rock" && computer === "papper" ? `Player one ${playerone} \nComputer ${computer} \nComputer win`:playerone === "papper" && computer === "sicssor" ? `Player one ${playerone} \nComputer ${computer} \nComputer win`:playerone === "sicssor" && computer === "papper" ? `Player one ${playerone} \nComputer ${computer} \nComputer win`: "\nPlayerone win"
        alert(result)
        let playAgain = confirm("Play Again");
        playAgain?location.reload() : alert("ok, thanks for playing")
        }else{
            alert("You Did'n Enter rock , papper or sicssor")
        }
    }else{
        alert("I Guess you changed your mind, May be next time")
    }
}else{
    alert("Ok, May be next time")
}