let userScore =0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msgs");

const userScoreP = document.querySelector("#user-Sc");
const CompScoreP = document.querySelector("#comp-Sc");

const genCompChoice =() =>{
    const options=["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText="Game is draw. Play again!";
}

const showWinner=(userWin, userChoice ,compId)=>{
    if (userWin){
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compId}`; 
    } else {
        compScore++;
        CompScoreP.innerText = compScore;
        msg.innerText = `Opps! You lose  ${compId} beats your ${userChoice}`;
    }
};

const playGame = (userChoice) =>{
    
    const compId= genCompChoice();

    if(userChoice === compId){
        drawGame();
    } else {
        let userWin =true;
        if (userChoice === "stone"){
            userWin= compId === "paper" ? false : true;
        } else if ( userChoice === "paper"){
            userWin = compId === "scissors" ? false : true;
        } else {
            compId === "stone" ? false : true;
        } 
    showWinner(userWin, userChoice, compId);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click',() =>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice,);
    });
});