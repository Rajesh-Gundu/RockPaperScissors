let userWon = 0;
let compWon = 0;
let draw = 0;
let totalMatches = 0;
let mode = "dark";

function switchMode() {
    const modebtn = document.querySelector("#sm");
    const summery = document.querySelectorAll(".summery");
    const choice = document.querySelector("#choice");
    if(mode == "dark") {
        summery.forEach( (s) => {
            s.setAttribute("class","summery light");
        });
        choice.setAttribute("class","light");
        document.body.setAttribute("class","light");
        modebtn.innerText = "Dark Mode";
        mode = "light";
    }
    else {
        summery.forEach( (s) => {
            s.setAttribute("class","summery dark");
        });
        choice.setAttribute("class","dark");
        document.body.setAttribute("class","dark");
        modebtn.innerText = "Light Mode";
        mode = "dark";
    }
}

function computerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if(num == 1)
        return "rock";
    else if(num == 2)
        return "paper";
    return "scissors";
}

function updateSummery() {
    const us = document.querySelector("#us");
    const cs = document.querySelector("#cs");
    us.innerHTML = `User's summery<br>Won : ${userWon}/${totalMatches}<br>Draw : ${draw}/${totalMatches}`;
    cs.innerHTML = `Computer's summery<br>Won : ${compWon}/${totalMatches}<br>Draw : ${draw}/${totalMatches}`;
}

function getResults(userChoice) {
    totalMatches++;
    let compChoice = computerChoice();
    const uc = document.getElementById("user");
    uc.innerText = "Your's choice : " + " " + userChoice;
    const cc = document.getElementById("computer");
    cc.innerText = "Computer's choice : " + " " + compChoice;
    const res = document.getElementById("result");
    if(userChoice == compChoice) {
        res.innerText = "Match DRAW..!";
        draw++;
    }
    else if((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
        res.innerText = "Great choice, You Won!!!";
        userWon++;
    }
    else {
        res.innerText = "Try hard, You Lose...";
        compWon++;
    }
    updateSummery();
}
