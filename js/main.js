let a = 2000;
document.querySelector('#moneyCount').innerText = a;

let b = 0; //value of winnings 
let c = 0; //value of total cash after bet & win

let firstBlock;
let secondBlock;
let thirdBlock;

document.querySelector('#minBetBut').addEventListener('click', gambleLow)
document.querySelector('#maxBetBut').addEventListener('click', gambleHigh)


function gambleLow(){ 

    // document.querySelector('#moneyCount').innerText -= 50;
    a -= 50;
    document.querySelector('#moneyCount').innerText = a;

    const spinOne = Math.random();
    const spinTwo = Math.random();
    const spinThree = Math.random();

    if(spinOne < 0.2000){
        document.querySelector('#block1').innerText = 1;
        firstBlock = 1;
    }else if(spinOne < 0.4000){
        document.querySelector('#block1').innerText = 2;
        firstBlock = 2;
    }else if(spinOne < 0.6000){
        document.querySelector('#block1').innerText = 3;
        firstBlock = 3;
    }else if(spinOne < 0.8000){
        document.querySelector('#block1').innerText = 4;
        firstBlock = 4;
    }else if(spinOne < 1.0000){
        document.querySelector('#block1').innerText = 5;
        firstBlock = 5;
    }

    if(spinTwo < 0.2000){
        document.querySelector('#block2').innerText = 1;
        secondBlock = 1;
    }else if(spinTwo < 0.4000){
        document.querySelector('#block2').innerText = 2;
        secondBlock = 2;
    }else if(spinTwo < 0.6000){
        document.querySelector('#block2').innerText = 3;
        secondBlock = 3;
    }else if(spinTwo < 0.8000){
        document.querySelector('#block2').innerText = 4;
        secondBlock = 4;
    }else if(spinTwo < 1.0000){
        document.querySelector('#block2').innerText = 5;
        secondBlock = 5;
    }

    if(spinThree < 0.2000){
        document.querySelector('#block3').innerText = 1;
        thirdBlock = 1;
    }else if(spinThree < 0.4000){
        document.querySelector('#block3').innerText = 2;
        thirdBlock = 2;
    }else if(spinThree < 0.6000){
        document.querySelector('#block3').innerText = 3;
        thirdBlock = 3;
    }else if(spinThree < 0.8000){
        document.querySelector('#block3').innerText = 4;
        thirdBlock = 4;
    }else if(spinThree < 1.0000){
        document.querySelector('#block3').innerText = 5;
        thirdBlock = 5;
    }


    if((firstBlock === 5) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 500;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL FIVES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 4) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 500;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL FOURS!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 3) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 500;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL THREES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 2) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 500;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL TWOS!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 1) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 500;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL ONES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else{
        document.querySelector('#jackPot').innerText = 'TRY AGAIN!';
    }
    
}

function gambleHigh(){

    a -= 100;
    document.querySelector('#moneyCount').innerText = a;

    const spinOne = Math.random();
    const spinTwo = Math.random();
    const spinThree = Math.random();


    if(spinOne < .2000){
        document.querySelector('#block1').innerText = 1;
        firstBlock = 1;
    }else if(spinOne < .4000){
        document.querySelector('#block1').innerText = 2;
        firstBlock = 2;
    }else if(spinOne < .6000){
        document.querySelector('#block1').innerText = 3;
        firstBlock = 3;
    }else if(spinOne < .8000){
        document.querySelector('#block1').innerText = 4;
        firstBlock = 4;
    }else if(spinOne < 1.0000){
        document.querySelector('#block1').innerText = 5;
        firstBlock = 5;
    }

    if(spinTwo < .2000){
        document.querySelector('#block2').innerText = 1;
        secondBlock = 1;
    }else if(spinTwo < .4000){
        document.querySelector('#block2').innerText = 2;
        secondBlock = 2;
    }else if(spinTwo < .6000){
        document.querySelector('#block2').innerText = 3;
        secondBlock = 3;
    }else if(spinTwo < .8000){
        document.querySelector('#block2').innerText = 4;
        secondBlock = 4;
    }else if(spinTwo < 1.0000){
        document.querySelector('#block2').innerText = 5;
        secondBlock = 5;
    }

    if(spinThree < .2000){
        document.querySelector('#block3').innerText = 1;
        thirdBlock = 1;
    }else if(spinThree < .4000){
        document.querySelector('#block3').innerText = 2;
        thirdBlock = 2;
    }else if(spinThree < .6000){
        document.querySelector('#block3').innerText = 3;
        thirdBlock = 3;
    }else if(spinThree < .8000){
        document.querySelector('#block3').innerText = 4;
        thirdBlock = 4;
    }else if(spinThree < 1.0000){
        document.querySelector('#block3').innerText = 5;
        thirdBlock = 5;
    }

    if((firstBlock === 5) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 1000;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL FIVES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 4) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 1000;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL FOURS!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 3) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 1000;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL THREES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 2) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 1000;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL TWOS!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else if((firstBlock === 1) && (firstBlock === secondBlock)  && (secondBlock === thirdBlock)){
        b = 1000;
        c = a + b;
        document.querySelector('#jackPot').innerText = 'JACKPOT, ALL ONES!';
        document.querySelector('#moneyCount').innerText = c;
        document.querySelector('#youWonThisMuch').innerText = b;
        a = c;
    }
    else{
        document.querySelector('#jackPot').innerText = 'TRY AGAIN!';
    }

}