let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let message = document.querySelector("#msg");
let compText = document.querySelector("#comp_score");
let userText = document.querySelector("#user_score");

const forDraw = () => {
    console.log("draw");
    message.innerText = "It's a draw!.";
    message.style.backgroundColor = "black";
}



const getCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin) => {

    if(userWin === true){
        console.log("win");
        userScore++;
        message.style.backgroundColor = "green";
        message.innerText = "Congratulations you won!!";
    }
    else {
        console.log("lost");
        compScore++;
        message.style.backgroundColor = "red";
        message.innerText = "Bad luck try again...";
    }
    userText.innerText = userScore;
    compText.innerText = compScore;
    
}

const playGame = (userChoice)=>{
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        forDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock" && compChoice === "paper"){
            userWin = false;
        }
        else if(userChoice === "paper" && compChoice === "scissors"){
            userWin = false;
        }
        else if(userChoice === "scissors" && compChoice === "rock"){
            userWin = false;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
        // console.log("choice was clicked");
    })
})