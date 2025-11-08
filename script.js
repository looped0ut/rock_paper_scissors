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

console.log(`computer choice :${getComputerChoice()}`);

function getHumanChoice(){
    let h= prompt("enter your choice","");
    h = h.toLowerCase();

    if (h !== 'rock'&& h !== 'scissors'&& h !== 'paper'){
        console.warn('no cheating!!!!!!!1')
        console.error('invalid choice');
    }

    return h;
}

console.log(`player choice :${getHumanChoice()}`);