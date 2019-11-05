var cards = document.querySelectorAll('.memCard');

var hasTurned = false;
var firstCard,secondCard;

function turnCard() {
    this.classList.add('turn');
    
    if(!hasTurned){
        hasTurned = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasTurned = false;

    checkMatch();
}

function checkMatch() {
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        lockCards();
        return;
    }

    unturnCards();
}

function unturnCards() {
    setTimeout(function(){
        firstCard.classList.remove("turn");
        secondCard.classList.remove("turn");
    }, 1000);
}

function lockCards() {
    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click',turnCard);
}


cards.forEach(card => card.addEventListener('click', turnCard));