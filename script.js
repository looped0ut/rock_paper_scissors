function getComputerChoice(){
    let c;
    let n= Math.random() * 100;

    if(n< 33.33){
     c = 'rock' ;   
    }

    else if(n< 66.66){
        c = 'paper';
    }

    else if(n< 100){
        c = 'scissors';
    }

    return c;
}



let compScore=0;
let playerScore=0;
let r =1;

function playRound(huma){

    round.textContent = (`ROUND ${r} :`);
    cont.appendChild(round.cloneNode(true));

    huma = huma.toLowerCase();

    let comp =getComputerChoice();

    div.textContent = (`you chose : ${huma} || computer chose : ${comp}\n`);
    cont.appendChild(div.cloneNode(true));

    if(huma === 'rock'){
        if(comp === 'rock'){
            div.textContent = 'DRAW!!!!';
            cont.appendChild(div.cloneNode(true));
        }
        if(comp === 'paper'){
            div.textContent = 'You lose.....PAPER BEATS ROCK';
            cont.appendChild(div.cloneNode(true));
            compScore = ++compScore;
        }
        if(comp === 'scissors'){
            div.textContent = 'You win.....ROCK BEAT SCISSORS';
            cont.appendChild(div.cloneNode(true));
            playerScore = ++playerScore;
        }
    }

    if(huma === 'paper'){
        if(comp === 'rock'){
            div.textContent = 'You win.....PAPER BEATS ROCK';
            cont.appendChild(div.cloneNode(true));
            playerScore = ++playerScore;
        }
        if(comp === 'paper'){
            div.textContent = 'DRAW!!!!';
            cont.appendChild(div.cloneNode(true));
        }
        if(comp === 'scissors'){
            div.textContent = 'You lose.....SCISSORS CUT PAPER';
            cont.appendChild(div.cloneNode(true));
            compScore = ++compScore;
        }
    }

    if(huma === 'scissors'){
        if(comp === 'rock'){
            div.textContent = 'You lose.....ROCK BEATS SCISSORS';
            cont.appendChild(div.cloneNode(true));
            compScore = ++compScore;
        }
        if(comp === 'paper'){
            div.textContent = 'You win.....SCISSORS CUT PAPER';
            cont.appendChild(div.cloneNode(true));
            playerScore = ++playerScore;
        }
        if(comp === 'scissors'){
            div.textContent = 'DRAW!!!!';
            cont.appendChild(div.cloneNode(true));
        }
    }
    
    div.textContent = `PLAYER : ${playerScore} || COMPUTER : ${compScore}`;
    cont.appendChild(div.cloneNode(true));
    r++;
}




let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");



let but
let body = document.querySelector("body");
let cont = document.createElement("div");
let div = document.createElement("div");
let result = document.createElement("div");
let round = document.createElement("h3");
let clear = document.createElement("button");
clear.textContent = "Play Again";


function playAgain(){

    cont.appendChild(clear);
    clear.addEventListener("click",function(){
        cont.replaceChildren();
        clear.remove();
        playerScore = 0;
        compScore = 0;
        r = 1;
    });
    
}

function play(){

    if(playerScore!==3 && compScore!==3){
    playRound(but)

    if(playerScore===3){
        result.style.color = "green";
        result.textContent = "Congrats You won!!!!!"
        cont.appendChild(result.cloneNode(true));

        playAgain();
    }
    if(compScore===3){
        result.style.color = "red";
        result.textContent="Sorry You Lost!!!!!";
        cont.appendChild(result.cloneNode(true));

        playAgain();
    }
    }

}




function playGame(){

    body.appendChild(cont)

    
rock.addEventListener("click",function(){

    but = rock.textContent
    play();
     
});

   

paper.addEventListener("click",function(){

    but = paper.textContent
    play();
     
});


scissors.addEventListener("click",function(){

    but = scissors.textContent
    play();
     
});


}


playGame();


