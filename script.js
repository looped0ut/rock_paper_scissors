console.log('.....ROCK.....PAPER.....SCISSORS');

function getComputerChoice(){
    let c;
    let n= Math.random() * 100;

    if(n< 33.33){
     c = 'rock' ;   
    }

    else if(n< 66.66){
        c = 'paper';
    }

    else if(n< 99.99){
        c = 'scissors';
    }

    return c;
}


function getHumanChoice(){
    let h= prompt("enter your choice","");
    h = h.toLowerCase();

    if (h !== 'rock'&& h !== 'scissors'&& h !== 'paper'){
        console.warn('no cheating!!!!!!!1')
        console.error('invalid choice');
    }

    return h;
}


let compScore=0;
let playerScore=0;

function playRound(){
    let huma =getHumanChoice();
    console.log(`\nyou chose : ${huma}`);

    let comp =getComputerChoice();
    console.log(`\ncomputer chose : ${comp}\n`);

    if(huma === 'rock'){
        if(comp === 'rock'){
            console.log('DRAW!!!!');
        }
        if(comp === 'paper'){
            console.log('You lose.....PAPER BEATS ROCK');
            compScore = ++compScore;
        }
        if(comp === 'scissors'){
            console.log('You win.....ROCK BEAT SCISSORS');
            playerScore = ++playerScore;
        }
    }

    if(huma === 'paper'){
        if(comp === 'rock'){
            console.log('You win.....PAPER BEATS ROCK');
            playerScore = ++playerScore;
        }
        if(comp === 'paper'){
            console.log('DRAW!!!!');
        }
        if(comp === 'scissors'){
            console.log('You lose.....SCISSORS CUT PAPER');
            compScore = ++compScore;
        }
    }

    if(huma === 'scissors'){
        if(comp === 'rock'){
            console.log('You lose.....ROCK BEATS SCISSORS');
            compScore = ++compScore;
        }
        if(comp === 'paper'){
            console.log('You win.....SCISSORS CUT PAPER');
            playerScore = ++playerScore;
        }
        if(comp === 'scissors'){
            console.log('DRAW!!!!');
        }
    }
    console.log(`\nPlayer\t\tComputer\n${playerScore}\t\t\t${compScore}`);
    console.log('\n\n');
}

function playGame(){
    while(playerScore !== 3 && compScore !== 3){
        playRound();
    }
    if(playerScore===3){
        console.log('Congrats You Won!!!!!')
    }
    if(compScore===3){
        console.log('Sorry You Lost!!!!!')
    }
}

playGame();

