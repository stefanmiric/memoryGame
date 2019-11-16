class Game {
    constructor(){

        this.cards = ["react", "react", "angular", "angular", "ember", "ember",
             "vuejs", "vuejs", "meteor", "meteor", "aurelia", "aurelia"]; //array used for random shuffling

        this.index = 0;
        this.array = []; //array containing Card objects
        
        this.hasTurned = false; //flag for checking if first card was turned
        this.lockBoard = false; //flag for disabling clicks
        this.firstCard;
        this.secondCard;
        this.numOfMatches = 0;
        this.startedGame = false;
        this.secs = 0;
        this.mins = 0;
        this.timerInt; //timer interval id
    }

    shuffleArray(array) {

        let currentIndex = array.length;
        let randomIndex, tmp;
    
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            tmp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tmp;
        }
    
        return array;
    }

    

    checkMatch() {

        if(this.array[this.firstCard.id].name === this.array[this.secondCard.id].name) { //check if two turned card are a match
            this.lockCards();
            this.numOfMatches++;
            return;
        }

        this.unturnCards();
    }

    unturnCards() {

        this.lockBoard = true;

        console.log("stigao sam ovde");
        setTimeout(() => {
            this.array[this.firstCard.id].domRef.classList.remove("turn");
            this.array[this.secondCard.id].domRef.classList.remove("turn");
            // lockBoard = false;
            this.resetBoard();
        }, 1000); //giving player a second to try and memorize the cards
    }

    lockCards() {

        //disabling click event if cards are a match

        this.array[this.firstCard.id].domRef.removeEventListener('click', this.array[this.firstCard.id].turnCard);
        this.array[this.secondCard.id].domRef.removeEventListener('click', this.array[this.secondCard.id].turnCard);

        this.resetBoard();
    }

    resetBoard(){ //reseting variable references

        [this.firstCard, this.secondCard] = [null, null];
        [this.hasTurned, this.lockBoard] = [false, false];
    }

    endGame(){

        alert("CONGRATULATIONS! YOU BEAT THE GAME IN " + document.getElementById("timer").innerHTML);
    }
}