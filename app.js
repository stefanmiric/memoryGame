var cards = document.querySelectorAll('.memCard');

var hasTurned = false;
var lockBoard = false;
var firstCard,secondCard;
var numOfMatches = 0;
var startedGame = false;
var secs = 0;
var mins = 0;
var timerInt;

document.getElementById("timer").innerHTML = mins + " : " + secs;

function changeValue(){

    var tmp;
    secs++;
    
    [mins, tmp] = [Math.floor(secs / 60), secs % 60];
    
    document.getElementById("timer").innerHTML = mins + " : " + tmp;
}

function startTimer(){

    stopTimer();
    secs = 0;
    timerInt =  setInterval(changeValue, 1000);
}

function stopTimer(){

    clearInterval(timerInt);
}

function turnCard() {

    if(!startedGame){
        startedGame = true;
        startTimer();
    }


    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.add('turn');
    
    if(!hasTurned){
        hasTurned = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    // hasTurned = false;

    checkMatch();
    if(numOfMatches === 6){
        stopTimer();
        setTimeout(endGame,100);
    };
}

function checkMatch() {

    if(firstCard.dataset.framework === secondCard.dataset.framework){
        lockCards();
        numOfMatches ++;
        return;
    }

    unturnCards();
}

function unturnCards() {

    lockBoard = true;

    setTimeout(function(){
        firstCard.classList.remove("turn");
        secondCard.classList.remove("turn");
        // lockBoard = false;
        resetBoard();
    }, 1000);
}

function lockCards() {

    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click',turnCard);

    resetBoard();
}

function resetBoard(){

    [firstCard, secondCard] = [null, null];
    [hasTurned, lockBoard] = [false, false];
}

function endGame(){

    alert("CONGRATULATIONS! YOU BEAT THE GAME IN " + document.getElementById("timer").innerHTML);
}

//IIFE to shuffle immediately
(function shuffleCards(){
    cards.forEach(card => {
        var pos = Math.floor(Math.random() * 12);
        card.style.order = pos;
    });
})();



cards.forEach(card => card.addEventListener('click', turnCard));